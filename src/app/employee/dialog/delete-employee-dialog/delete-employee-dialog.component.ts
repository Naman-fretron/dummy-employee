import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { deleteEmployee } from '../../actions/employee.action';
import { EmployeeState } from '../../reducer/employee.state';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-delete-employee-dialog',
  templateUrl: './delete-employee-dialog.component.html',
  styleUrls: ['./delete-employee-dialog.component.scss']
})
export class DeleteEmployeeDialogComponent {
 constructor(public dialogRef: MatDialogRef<DeleteEmployeeDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any,
 private http: EmployeeService, private store: Store<{employee : EmployeeState}>){

}

  dialogClose(){
   this.dialogRef.close()
  }


  deleteEmployee(){
     this.store.dispatch(deleteEmployee({id: this.data.empId}))
     this.dialogRef.close()
  }
  
}
