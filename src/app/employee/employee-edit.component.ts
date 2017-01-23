import { Component, OnInit,Input, Output } from '@angular/core';


import {Employee} from './employee';
import {EmployeeService} from './employee.service';

import 'rxjs/add/operator/switchMap';
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'employee-edit',
  template: `
    <div *ngIf="employee">
    
      <h1>Edit {{employee.name}}</h1>
      
      <div class="col-md-7">
          <img src="{{employee.photoId}}" alt="Image not Available">
          <br>
          <br>
            <div class="input-group">
              <span class="input-group-addon" id="basic-addon1">Id</span>
              <input type="text" [(ngModel)]="employee.id" placeholder="id" class="form-control" disabled>
            </div>
            <br>
            
            <div class="input-group">
              <span class="input-group-addon" id="basic-addon1">Name</span>
              <input type="text" [(ngModel)]="employee.name" class="form-control" >
            </div>
            <br>
            
            <div class="input-group">
              <span class="input-group-addon" id="basic-addon1">Title</span>
              <input type="text" [(ngModel)]="employee.title" class="form-control">
            </div>
            <br>
            
            <div class="input-group">
              <span class="input-group-addon" id="basic-addon1">Hire Date</span>
              <input type="text" [(ngModel)]="employee.hireDate" class="form-control">
            </div>
            <br>
            
            <div class="input-group">
              <span class="input-group-addon" id="basic-addon1">Age</span>
              <input type="text" [(ngModel)]="employee.age" class="form-control">
            </div>
            <br>
            
            <div class="input-group">
              <span class="input-group-addon" id="basic-addon1">Photo Id</span>
              <input type="text" [(ngModel)]="employee.photoId" class="form-control" disabled>
            </div>
        
        <br>
        <br>
        <button class="btn btn-default" (click)="returnPage()">Return</button>
        <button class="btn btn-success" (click)="save(employee)">Save</button>
      </div>
    </div>


`,
  styles: [`
      img{
        max-width: 200px;
        max-height: 200px;
      }
`]
})
export class EmployeeEditComponent implements OnInit {

  employee: Employee;
  //this input will receive the emit from the list
  @Input() currentEmployee: Employee;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.employeeService.getSingleEmployee(+params['id']))
      .subscribe(employee => this.employee = employee);
      console.log(this.employee)

  }

  //this method will allow me to return to the previous page
  returnPage(): void {
    this.location.back();
  }

  save(employee){

    this.employeeService.updateEmployee(employee)
      .then(() => alert("Changes of " + employee.name + " were sucessfully saved"))
      .then(() => this.returnPage());

  }



}
