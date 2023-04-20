import { Conditional } from "@angular/compiler"
import { createReducer, on } from "@ngrx/store"
import { addEmployeeSuccess, deleteEmployeeSuccess, loadEmployeeSuccess, setError, updateEmployeeSuccess } from "../actions/employee.action"
import { initailState } from "./employee.state"

const _employeeReducer = createReducer(
    initailState, on(loadEmployeeSuccess, (state, actions) => {
        return {
            ...state,
            employee: actions.employee
        }
    }),

    on(addEmployeeSuccess, (state: any, actions:any) => {

        let employeedata = {...actions.employee}
        return {
            ...state,
            employee: [...state.employee, employeedata]
        }
    }),

    on(updateEmployeeSuccess, (state: any, actions:any) => {
        const updatedEmployeeData = state.employee.map((item:any) => {
            return actions.employee.id === item.id ? actions.employee : item
        })
        console.log(updatedEmployeeData,'nsmn')
        return {
            ...state.employee,
            employee: [...updatedEmployeeData]
        }
    }),

    on(deleteEmployeeSuccess, (state: any, { id }) => {

        const updatedEmployeeData = state.employee.filter((item:any) => {
            return item.id !== id
        })
        return {
            ...state,
            employee: [...state.employee, updatedEmployeeData]
        }
    }),

    on(setError, (state, actions) => {
        return {
            ...state,
            errorMsg : actions.message
        }
    }),

)

export function EmployeeReducer(state: any, actions: any){
    return _employeeReducer(state, actions)
}