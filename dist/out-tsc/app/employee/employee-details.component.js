var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
export var EmployeeDetailsComponent = (function () {
    function EmployeeDetailsComponent(employeeService, route, location) {
        this.employeeService = employeeService;
        this.route = route;
        this.location = location;
    }
    EmployeeDetailsComponent.prototype.ngOnInit = function () {
    };
    EmployeeDetailsComponent.prototype.delete = function (currentEmployee) {
        var _this = this;
        if (confirm("Are you sure you want to delete " + currentEmployee.name + "?"))
            this.employeeService.delete(currentEmployee.id)
                .then(function () { return _this.returnPage(); });
    };
    //this method will allow me to return to the previous page
    EmployeeDetailsComponent.prototype.returnPage = function () {
        this.location.back();
    };
    __decorate([
        Input(), 
        __metadata('design:type', Employee)
    ], EmployeeDetailsComponent.prototype, "currentEmployee", void 0);
    EmployeeDetailsComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'employee-details',
            template: "\n        <h2>Employee Information</h2>\n        \n        <div class=\"col-md-5\">\n        <img src=\"{{currentEmployee?.photoId}}\" alt=\"Image not Available\">\n        </div>\n        <div class=\"col-md-7\">\n            <table class=\"table\">\n              <tbody>\n                <tr>\n                  <th scope=\"row\">Employee ID</th>\n                  <td>{{currentEmployee?.id}}</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Name</th>\n                  <td>{{currentEmployee?.name}}</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Title</th>\n                  <td>{{currentEmployee?.title}}</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Hire</th>\n                  <td>{{currentEmployee?.hireDate | date}}</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Age</th>\n                  <td>{{currentEmployee?.age}}</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Photo</th>\n                  <td>{{currentEmployee?.photoId}}</td>\n                </tr>\n              </tbody>\n            </table>\n            \n            <button class=\"btn btn-info\" [routerLink]=\"['/employee/employee-edit', currentEmployee?.id]\">Edit Employee</button>\n            <button class=\"btn btn-danger\" (click)=\"delete(currentEmployee)\" >Delete Employee</button>\n        </div>\n",
            styles: ["\n\n    img {\n    border-radius: 5px;\n    max-height: 400px;\n    }\n"]
        }), 
        __metadata('design:paramtypes', [EmployeeService, ActivatedRoute, Location])
    ], EmployeeDetailsComponent);
    return EmployeeDetailsComponent;
}());
//# sourceMappingURL=/Users/JairoMan/Desktop/Angular/EmployeeProject/src/app/employee/employee-details.component.js.map