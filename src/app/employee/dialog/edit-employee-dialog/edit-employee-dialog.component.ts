import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addEmployee, updateEmployee } from '../../actions/employee.action';
import { EmployeeModal } from '../../modal/employee.modal';
import { employeeInitialState, EmployeeState } from '../../reducer/employee.state';

@Component({
  selector: 'app-edit-employee-dialog',
  templateUrl: './edit-employee-dialog.component.html',
  styleUrls: ['./edit-employee-dialog.component.scss']
})
export class EditEmployeeDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<EditEmployeeDialogComponent>,
  private store: Store<{employee : EmployeeState}>){}


  employee : EmployeeModal = JSON.parse(JSON.stringify(employeeInitialState));

 ngOnInit(): void {
   this.employee = {...this.data.payload}
 }

 addEmployee(){
  delete this.employee['id']
  let employeedata = {...this.employee}
  this.store.dispatch(addEmployee({employee : employeedata}))
  this.dialogRef.close()
 }

 updateEmployee(){
  delete this.employee['profile_image']
   let employeedata = {...this.employee}
   this.store.dispatch(updateEmployee({employee : employeedata}))
   this.dialogRef.close()

 }
}
