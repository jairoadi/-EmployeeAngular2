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
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
export var EmployeeEditComponent = (function () {
    function EmployeeEditComponent(employeeService, route, location) {
        this.employeeService = employeeService;
        this.route = route;
        this.location = location;
    }
    EmployeeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.employeeService.getSingleEmployee(+params['id']); })
            .subscribe(function (employee) { return _this.employee = employee; });
        console.log(this.employee);
    };
    //this method will allow me to return to the previous page
    EmployeeEditComponent.prototype.returnPage = function () {
        this.location.back();
    };
    EmployeeEditComponent.prototype.save = function (employee) {
        var _this = this;
        this.employeeService.updateEmployee(employee)
            .then(function () { return alert("Changes of " + employee.name + " were sucessfully saved"); })
            .then(function () { return _this.returnPage(); });
    };
    __decorate([
        Input(), 
        __metadata('design:type', Employee)
    ], EmployeeEditComponent.prototype, "currentEmployee", void 0);
    EmployeeEditComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'employee-edit',
            template: "\n    <div *ngIf=\"employee\">\n    \n      <h1>Edit {{employee.name}}</h1>\n      \n      <div class=\"col-md-7\">\n          <img src=\"{{employee.photoId}}\" alt=\"Image not Available\">\n          <br>\n          <br>\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\" id=\"basic-addon1\">Id</span>\n              <input type=\"text\" [(ngModel)]=\"employee.id\" placeholder=\"id\" class=\"form-control\" disabled>\n            </div>\n            <br>\n            \n            <div class=\"input-group\">\n              <span class=\"input-group-addon\" id=\"basic-addon1\">Name</span>\n              <input type=\"text\" [(ngModel)]=\"employee.name\" class=\"form-control\" >\n            </div>\n            <br>\n            \n            <div class=\"input-group\">\n              <span class=\"input-group-addon\" id=\"basic-addon1\">Title</span>\n              <input type=\"text\" [(ngModel)]=\"employee.title\" class=\"form-control\">\n            </div>\n            <br>\n            \n            <div class=\"input-group\">\n              <span class=\"input-group-addon\" id=\"basic-addon1\">Hire Date</span>\n              <input type=\"text\" [(ngModel)]=\"employee.hireDate\" class=\"form-control\">\n            </div>\n            <br>\n            \n            <div class=\"input-group\">\n              <span class=\"input-group-addon\" id=\"basic-addon1\">Age</span>\n              <input type=\"text\" [(ngModel)]=\"employee.age\" class=\"form-control\">\n            </div>\n            <br>\n            \n            <div class=\"input-group\">\n              <span class=\"input-group-addon\" id=\"basic-addon1\">Photo Id</span>\n              <input type=\"text\" [(ngModel)]=\"employee.photoId\" class=\"form-control\" disabled>\n            </div>\n        \n        <br>\n        <br>\n        <button class=\"btn btn-default\" (click)=\"returnPage()\">Return</button>\n        <button class=\"btn btn-success\" (click)=\"save(employee)\">Save</button>\n      </div>\n    </div>\n\n\n",
            styles: ["\n      img{\n        max-width: 200px;\n        max-height: 200px;\n      }\n"]
        }), 
        __metadata('design:paramtypes', [EmployeeService, ActivatedRoute, Location])
    ], EmployeeEditComponent);
    return EmployeeEditComponent;
}());
//# sourceMappingURL=/Users/JairoMan/Desktop/Angular/EmployeeProject/src/app/employee/employee-edit.component.js.map