import { Component, OnInit, Input } from '@angular/core';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';

import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'employee-details',
  template: `
        <h2>Employee Information</h2>
        
        <div class="col-md-5">
        <img src="{{currentEmployee?.photoId}}" alt="Image not Available">
        </div>
        <div class="col-md-7">
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">Employee ID</th>
                  <td>{{currentEmployee?.id}}</td>
                </tr>
                <tr>
                  <th scope="row">Name</th>
                  <td>{{currentEmployee?.name}}</td>
                </tr>
                <tr>
                  <th scope="row">Title</th>
                  <td>{{currentEmployee?.title}}</td>
                </tr>
                <tr>
                  <th scope="row">Hire</th>
                  <td>{{currentEmployee?.hireDate | date}}</td>
                </tr>
                <tr>
                  <th scope="row">Age</th>
                  <td>{{currentEmployee?.age}}</td>
                </tr>
                <tr>
                  <th scope="row">Photo</th>
                  <td>{{currentEmployee?.photoId}}</td>
                </tr>
              </tbody>
            </table>
            
            <button class="btn btn-info" [routerLink]="['/employee/employee-edit', currentEmployee?.id]">Edit Employee</button>
            <button class="btn btn-danger" (click)="delete(currentEmployee)" >Delete Employee</button>
        </div>
`,
  styles: [`

    img {
    border-radius: 5px;
    max-height: 400px;
    }
`]
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;
  selectedEmployee: Employee;

  //this input will receive the emit from the list
  @Input() currentEmployee: Employee;

  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {

  }

  delete(currentEmployee){
    if (confirm("Are you sure you want to delete " + currentEmployee.name + "?"))



    this.employeeService.delete(currentEmployee.id)
      .then(() => this.returnPage());
  }
  //this method will allow me to return to the previous page
  returnPage(): void {
    this.location.back();
  }





}
