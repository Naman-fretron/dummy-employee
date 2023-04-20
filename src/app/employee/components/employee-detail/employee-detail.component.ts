import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {
  
  constructor(private route: ActivatedRoute){

  }

  private routeSub: Subscription;

  id: string

  ngOnInit(): void {
  this.routeSub = this.route.params.subscribe((params) => {
      this.id = params['id']
      console.log(this.id)
    })

    
  }
 
  ngOnDestroy(): void {
    this.routeSub.unsubscribe()
  }

}
