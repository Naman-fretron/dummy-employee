import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeComponent } from './components/employee/employee.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { EmployeeDetailComponent } from "./components/employee-detail/employee-detail.component";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EmployeeReducer } from "./reducer/employee.reducer";
import { EffectsModule } from "@ngrx/effects";
import { EmployeeEffects } from "./effects/employee.effects";
import {MatDialogModule} from '@angular/material/dialog';
import { EditEmployeeDialogComponent } from "./dialog/edit-employee-dialog/edit-employee-dialog.component";
import { DeleteEmployeeDialogComponent } from "./dialog/delete-employee-dialog/delete-employee-dialog.component";
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";

const routes: Routes = [
  
  {path: '', component: EmployeeComponent},
  {
    path: 'detail/:id',
    component: EmployeeDetailComponent,
  }
];

@NgModule({
    declarations: [
    EmployeeComponent,
    EmployeeDetailComponent,
    EditEmployeeDialogComponent,
    DeleteEmployeeDialogComponent
  ],
    imports: [
      RouterModule.forChild(routes),
      CommonModule,
      MatTooltipModule,
      MatDialogModule,
      MatButtonModule,
      MatIconModule,
      FormsModule,
      HttpClientModule,
      MatInputModule,
      MatFormFieldModule ,
      StoreModule.forFeature('employee', EmployeeReducer),
      EffectsModule.forFeature([EmployeeEffects])
    ]
})
export class EmployeeModule{

}