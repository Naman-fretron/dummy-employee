import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes = [{ path: '', component: HomeComponent }];

@NgModule({
    declarations: [
        HomeComponent
  ],
    imports: [RouterModule.forChild(routes), CommonModule]
})

export class HomeModule {

}