var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Router } from "@angular/router";
export var EmployeeListComponent = (function () {
    function EmployeeListComponent(_employeeService, _router) {
        this._employeeService = _employeeService;
        this._router = _router;
        this.employees = []; //this array of of employees will hold all the employees being rendered from the restful API
        this.visibility = true; //this variable will be used to hide detail information until user clicks
        this.selectedEmployee = new EventEmitter(); //this emitter will output the selected item that will be received in the employee-details component
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getAllEmployees()
            .then(function (x) { return _this.employees = x; });
    };
    //method that will pass the employee object and activate the employee-details component
    EmployeeListComponent.prototype.onClick = function (employee) {
        this.chosen = employee;
        this.selectedEmployee.emit(employee);
        this.visibility = false;
        //console.log(employee);//this line is for debbuging purposes
    };
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], EmployeeListComponent.prototype, "selectedEmployee", void 0);
    EmployeeListComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'employee-list',
            template: "\n      <h1>List of Employees</h1>\n      \n      \n        <div class=\"list-group\">\n            <li class=\"list-group-item module\" *ngFor=\"let employee of employees\" \n            [class.chosen]=\"employee === chosen\" (click)=\"onClick(employee)\">{{employee.name}}</li>\n        </div>\n     \n\n\n",
            styles: ["\n      .chosen {\n      background-color: #364758 !important;\n      color: white;\n    }\n      \n    .list-group li:hover {\n      background-color: #445a6f;\n      color: white;\n    }  \n\n"]
        }), 
        __metadata('design:paramtypes', [EmployeeService, Router])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
//# sourceMappingURL=/Users/JairoMan/Desktop/Angular/EmployeeProject/src/app/employee/employee-list.component.js.map