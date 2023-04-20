import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeModule } from './employee/employee.module';
import { HomeModule } from './home/home.module';
const routes: Routes = [
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
