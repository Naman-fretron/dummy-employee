import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dummy-employee';
  isExpand: boolean = true;
  collapse: boolean = false;
  isShow: boolean = true;
  @ViewChild("drawer", { static: true }) drawer: any;
   active = 'home' 
   
  showSidenav(event: any) {
    this.drawer.open();
    this.isShow = event;
    this.isExpand = event;
  }
  
  show() {
    if (this.isExpand) {
      return;
    } else {
      this.isShow = true;
      this.collapse = true;
    }
  }

  hide() {
    if (this.isExpand) {
      return;
    } else {
      this.isShow = false;
      this.collapse = false;
    }
  }

}
