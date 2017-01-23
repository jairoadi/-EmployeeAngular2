import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {EmployeeService} from './employee.service';

import {Employee} from './employee';
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'employee-list',
  template: `
      <h1>List of Employees</h1>
      
      
        <div class="list-group">
            <li class="list-group-item module" *ngFor="let employee of employees" 
            [class.chosen]="employee === chosen" (click)="onClick(employee)">{{employee.name}}</li>
        </div>
     


`,
  styles: [`
      .chosen {
      background-color: #364758 !important;
      color: white;
    }
      
    .list-group li:hover {
      background-color: #445a6f;
      color: white;
    }  

`]
})
export class EmployeeListComponent implements OnInit {


  employees= [];//this array of of employees will hold all the employees being rendered from the restful API

  visibility = true;//this variable will be used to hide detail information until user clicks

  chosen: Employee;

  @Output() selectedEmployee = new EventEmitter <Employee>();//this emitter will output the selected item that will be received in the employee-details component

  constructor( private _employeeService: EmployeeService, private _router: Router) {}

  ngOnInit(): void {
    this._employeeService.getAllEmployees()
      .then(x => this.employees = x);
  }

  //method that will pass the employee object and activate the employee-details component
    onClick(employee : Employee) {

      this.chosen = employee;
      this.selectedEmployee.emit(employee);
      this.visibility = false;
      //console.log(employee);//this line is for debbuging purposes
    }





}
