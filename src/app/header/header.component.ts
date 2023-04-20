import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INIT } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 @Input() isExpand: boolean = true
  @Input() isShow: boolean;
  @Output() showSidenav = new EventEmitter<any>();


  sidenavToggle(){
    this.isShow = !this.isShow;

    this.showSidenav.emit(this.isShow);
  }
}
