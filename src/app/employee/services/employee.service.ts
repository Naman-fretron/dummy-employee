import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { EmployeeModal } from "../modal/employee.modal";

@Injectable({
    providedIn : 'root'
})

export class EmployeeService {
  constructor(private http : HttpClient){
  }

    getEmployeeList() {
        return this.http.get('http://localhost:3000/data').pipe(
            map((res: any) => {
                const employee = res
                return employee
            })
        )
    }

    addEmployee(employee: EmployeeModal){
        return this.http.post('http://localhost:3000/data', employee)
    }

    updateEmployee(employee: EmployeeModal, id:any){
        // let data = JSON.stringify(employee)
        // console.log(data)
        // let headers: HttpHeaders = new HttpHeaders({
        //     "Content-Type": "application/json",
        //   });
        return this.http.put(`http://localhost:3000/data/${id}`, employee)
    }

    deleteEmployee(id:any){
        return this.http.delete(`http://localhost:3000/data/${id}`)
    }

    filterEmploye(payload:any){
        console.log(payload)
        return this.http.get(`http://localhost:3000/data?`, {params: payload})
    }
  
}