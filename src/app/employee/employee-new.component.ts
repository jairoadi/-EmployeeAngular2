import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "./employee.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

import {Employee} from "./employee";

@Component({
  moduleId: module.id,
  selector: 'employee-new',
  template:`
        <div class="col-md-7">
          
          <img src="{{employee.photoId}}" alt="Image not Available">
          
          <br>
          <br>
            
          
          <!-- playing with the form group -->
          <form (ngSubmit)="onSubmit()" #employeeForm="ngForm">
            
            <br>
            <label for="name">ID</label>
              <input type="text" class="form-control" id="id" [(ngModel)]="employee.id" name="id"
                     #id="ngModel" disabled>
          
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" required [(ngModel)]="employee.name" name="name"
                   #name="ngModel" >
            <div [hidden]="name.valid || name.pristine"
                 class="alert alert-danger">
              Name is required
            </div>
            
            <label for="name">Title</label>
            <input type="text" class="form-control" id="title" required [(ngModel)]="employee.title" name="title"
                   #title="ngModel" >
            <div [hidden]="title.valid || title.pristine"
                 class="alert alert-danger">
              Title is required
            </div>
            
            <label for="name">Hire Date</label>
            <input type="text" class="form-control" id="hireDate" required [(ngModel)]="employee.hireDate" name="title"
                   #hireDate="ngModel" >
            <div [hidden]="hireDate.valid || hireDate.pristine"
                 class="alert alert-danger">
              Hire date is required
            </div>
            
            <label for="name">Age</label>
            <input type="text" class="form-control" id="age" required [(ngModel)]="employee.age" name="age"
                   #age="ngModel" >
            <div [hidden]="age.valid || age.pristine"
                 class="alert alert-danger">
              Age is required
            </div>
            
            <label for="name">Photo ID</label>
            <input type="text" class="form-control" id="photoId" required [(ngModel)]="employee.photoId" name="photoId"
                   #photoId="ngModel" >
            <div [hidden]="photoId.valid || photoId.pristine"
                 class="alert alert-danger">
              Photo ID is required
            </div>
           
            
            <br>
            <br>
            <button class="btn btn-success" [disabled]="!employeeForm.form.valid" (click)="save(employee)">Create</button>
          </form>
          
        </div>

`,
  styles: [`

  img{
    max-height: 200px;
  }


`]
})
export class EmployeeNewComponent implements OnInit {

  employee = new Employee ();
  submitted = false;

  constructor(private employeeService: EmployeeService,
              private location: Location) { }

  ngOnInit() {
  }

  //this line will be deleted on production. I'm using it to ensure that the form is receiving values
  get diagnostic() {
    return JSON.stringify(this.employee); }

  //this method will allow me to return to the previous page
  returnPage(): void {
    this.location.back();
  }


  save(employee) {
    console.log(employee);

    this.employeeService.createEmployee(employee)
      .then(() => alert("Employee " + employee.name + " was sucessfully created"))
      .then(() => this.returnPage())

  }

  onSubmit() { this.submitted = true; };
}
