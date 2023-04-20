import { createAction, props } from "@ngrx/store"
import { EmployeeModal } from "../modal/employee.modal"

export const set_error = '[employee-page] set error'
export const setError = createAction(set_error, props<{message: string}>())

export const load_Employee = '[employee-page] loadEmployee'
export const load_Employee_Success = '[employee-page] loadEmployeeSuccess'

export const loadEmployee = createAction(load_Employee)
export const loadEmployeeSuccess = createAction(load_Employee_Success, props<{employee: EmployeeModal[]}>())

export const add_Employee_Action = '[employee-page] addEmployee'
export const add_Employee_Success = '[employee-page] addEmployeeSuccess'


export const addEmployee = createAction(add_Employee_Action, props<{employee: EmployeeModal}>())
export const addEmployeeSuccess = createAction(add_Employee_Success, props<{employee: EmployeeModal}>()) 


export const update_Employee_Action = '[employee-page] updateEmployee'
export const update_Employee_Success = '[employee-page] updateEmployeeSuccess'


export const updateEmployee = createAction(update_Employee_Action, props<{employee: EmployeeModal}>())
export const updateEmployeeSuccess = createAction(update_Employee_Success, props<{employee: EmployeeModal}>())  


export const delete_Employee = '[employee-page] deleteEmployee'
export const delete_Employee_Success = '[employee-page] deleteEmployeeSuccess'

export const deleteEmployee = createAction(delete_Employee, props<{id : string}>())
export const deleteEmployeeSuccess = createAction(delete_Employee_Success, props<{id : string}>())