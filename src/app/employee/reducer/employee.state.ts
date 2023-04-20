import { EmployeeModal } from "../modal/employee.modal";

export interface EmployeeState {
    employee : EmployeeModal[];
    errorMsg : string
}

export const initailState : EmployeeState = {
    employee : [],
    errorMsg : ''
}

export const employeeInitialState : EmployeeModal = {
    id: null,
    employee_name: null,
    employee_salary : null,
    employee_age : null
}