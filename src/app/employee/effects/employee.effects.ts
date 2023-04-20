import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, merge, mergeMap, Observable, of } from "rxjs";
import { addEmployee, addEmployeeSuccess, deleteEmployee, deleteEmployeeSuccess, loadEmployee, loadEmployeeSuccess, setError, updateEmployee, updateEmployeeSuccess } from "../actions/employee.action";
import { EmployeeService } from "../services/employee.service";

@Injectable({
    providedIn: 'root'
})

export class EmployeeEffects {
 constructor(private http: EmployeeService, private action$: Actions){

 }



 employeeEffect$ = createEffect( () => {
    return this.action$.pipe(
        ofType(loadEmployee),
        mergeMap((actions) => {
          return this.http.getEmployeeList().pipe(
            map((employee) => {
                return loadEmployeeSuccess({employee})
            }),
            catchError((error) => {
              return of(setError({message :error.error.message}))
            })
          )
        })
    )
 })

 addEmployee$ = createEffect( () => {
    return this.action$.pipe(
      ofType(addEmployee),
      mergeMap((action) => {
        return this.http.addEmployee(action.employee).pipe(
          map((data:any) => {
            console.log(data,'ad')
            return addEmployeeSuccess({employee: data})
          }),
          catchError((error) => {
            return of(setError({message :error.error.message}))
          })
        )
      })
    )
 })


 updateEmployee$ = createEffect( () => {
  return this.action$.pipe(
    ofType(updateEmployee),
    mergeMap((action) => {
      let id = action.employee.id
      console.log(id)
      return this.http.updateEmployee(action.employee, id).pipe(
        map((data:any) => {
          console.log(data)
          return updateEmployeeSuccess({employee : data})
        }),
        catchError((error) => {
          return of(setError({message :error.error.message}))
        })
      )
    })
  )
})


deleteEmployee$ = createEffect( () => {
  return this.action$.pipe(
    ofType(deleteEmployee),
    mergeMap((action) => {
      return this.http.deleteEmployee(action.id).pipe(
        map((data:any) => {
          console.log(data,'up')
          return deleteEmployeeSuccess({id: action.id})
        }),
        catchError((error) => {
          return of(setError({message :error.error.message}))
        })
      )
    })
  )
})
}