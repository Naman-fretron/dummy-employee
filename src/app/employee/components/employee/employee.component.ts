import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, map, Observable, Subject } from 'rxjs';
import { loadEmployee } from '../../actions/employee.action';
import { DeleteEmployeeDialogComponent } from '../../dialog/delete-employee-dialog/delete-employee-dialog.component';
import { EditEmployeeDialogComponent } from '../../dialog/edit-employee-dialog/edit-employee-dialog.component';
import { EmployeeModal } from '../../modal/employee.modal';
import { getEmployee, getErrorMsg } from '../../reducer/employee.selector';
import { EmployeeState } from '../../reducer/employee.state';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  constructor(
    private store: Store<{ employee: EmployeeState }>,
    public dialog: MatDialog, private http: EmployeeService,
    private router: Router
  ) {}

  searchKey: string = '';
  employee$: Observable<any>;
  searchSubject = new Subject<any>();

  ngOnInit(): void {
    this.employee$ = this.store.select(getEmployee);

    this.store.select(getErrorMsg).subscribe((data) => {
      if (data) alert(data);
    });
    this.store.dispatch(loadEmployee());

    this.searchSubject
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((value:any) => {
        let payload = {}
        if(value)
         payload = {employee_name : value}
        console.log(payload)
       this.employee$ = this.http.filterEmploye(payload).pipe(
        map((res) => {
          return res
        })
       )
      });
  }

  clear() {
    this.searchKey = '';
  }

  searchFunc(e: any) {
    let value = e.target.value;
    this.searchSubject.next(value);
  }

  employeeDetail(id:any){
    console.log('tets')
    this.router.navigate(['employee/detail', id])
  }

  addEmployee() {
    let dialogRefs = this.dialog.open(EditEmployeeDialogComponent, {
      height: '400px',
      data: { action: 'add', payload: '' },
    });
  }

  editDialog(employee: EmployeeModal) {
    let dialogRef = this.dialog.open(EditEmployeeDialogComponent, {
      // width:'500px',
      height: '400px',
      data: { action: 'edit', payload: employee },
    });
  }
  deleteDialog(id: any) {
    let dialogRef = this.dialog.open(DeleteEmployeeDialogComponent, {
      height: '180px',
      data: { empId: id },
    });
    dialogRef.afterClosed().subscribe((data: String[]) => {
      if (data) {
      }
    });
  }
}
