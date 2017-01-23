import { Component, OnInit } from '@angular/core';

import {Employee} from './employee';

@Component({
  moduleId: module.id,
  selector: 'employee',
  template: `
       <div class="col-md-4">
             <employee-list (selectedEmployee) ="currentEmployee = $event" (click)="toggle()"></employee-list>
      </div>
      <div class="col-md-8" [hidden]="visibility">
          <employee-details [currentEmployee] = "currentEmployee"></employee-details>
      </div>

`,
  styles: [`

`]
})
export class EmployeeComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  currentEmployee: Employee;

  visibility = true;

  toggle(){
    if (this.visibility != false)
    {
      this.visibility = !this.visibility;
    }
    else
    {
      return;
    }

  }



}
