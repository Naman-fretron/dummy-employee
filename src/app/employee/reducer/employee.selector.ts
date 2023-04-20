import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { EmployeeState } from "./employee.state";

  
   const getEmployeeSelector = createFeatureSelector<EmployeeState>('employee')

   export const getEmployee = createSelector(getEmployeeSelector, state => {
    return state.employee
   })


   export const getErrorMsg = createSelector(getEmployeeSelector, state => {
    return state.errorMsg
   })