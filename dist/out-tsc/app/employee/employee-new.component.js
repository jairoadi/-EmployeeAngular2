var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { EmployeeService } from "./employee.service";
import { Location } from "@angular/common";
import { Employee } from "./employee";
export var EmployeeNewComponent = (function () {
    function EmployeeNewComponent(employeeService, location) {
        this.employeeService = employeeService;
        this.location = location;
        this.employee = new Employee();
        this.submitted = false;
    }
    EmployeeNewComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(EmployeeNewComponent.prototype, "diagnostic", {
        //this line will be deleted on production. I'm using it to ensure that the form is receiving values
        get: function () {
            return JSON.stringify(this.employee);
        },
        enumerable: true,
        configurable: true
    });
    //this method will allow me to return to the previous page
    EmployeeNewComponent.prototype.returnPage = function () {
        this.location.back();
    };
    EmployeeNewComponent.prototype.save = function (employee) {
        var _this = this;
        console.log(employee);
        this.employeeService.createEmployee(employee)
            .then(function () { return alert("Employee " + employee.name + " was sucessfully created"); })
            .then(function () { return _this.returnPage(); });
    };
    EmployeeNewComponent.prototype.onSubmit = function () { this.submitted = true; };
    ;
    EmployeeNewComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'employee-new',
            template: "\n        <div class=\"col-md-7\">\n          \n          <img src=\"{{employee.photoId}}\" alt=\"Image not Available\">\n          \n          <br>\n          <br>\n            \n          \n          <!-- playing with the form group -->\n          <form (ngSubmit)=\"onSubmit()\" #employeeForm=\"ngForm\">\n            \n            <br>\n            <label for=\"name\">ID</label>\n              <input type=\"text\" class=\"form-control\" id=\"id\" [(ngModel)]=\"employee.id\" name=\"id\"\n                     #id=\"ngModel\" disabled>\n          \n            <label for=\"name\">Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"name\" required [(ngModel)]=\"employee.name\" name=\"name\"\n                   #name=\"ngModel\" >\n            <div [hidden]=\"name.valid || name.pristine\"\n                 class=\"alert alert-danger\">\n              Name is required\n            </div>\n            \n            <label for=\"name\">Title</label>\n            <input type=\"text\" class=\"form-control\" id=\"title\" required [(ngModel)]=\"employee.title\" name=\"title\"\n                   #title=\"ngModel\" >\n            <div [hidden]=\"title.valid || title.pristine\"\n                 class=\"alert alert-danger\">\n              Title is required\n            </div>\n            \n            <label for=\"name\">Hire Date</label>\n            <input type=\"text\" class=\"form-control\" id=\"hireDate\" required [(ngModel)]=\"employee.hireDate\" name=\"title\"\n                   #hireDate=\"ngModel\" >\n            <div [hidden]=\"hireDate.valid || hireDate.pristine\"\n                 class=\"alert alert-danger\">\n              Hire date is required\n            </div>\n            \n            <label for=\"name\">Age</label>\n            <input type=\"text\" class=\"form-control\" id=\"age\" required [(ngModel)]=\"employee.age\" name=\"age\"\n                   #age=\"ngModel\" >\n            <div [hidden]=\"age.valid || age.pristine\"\n                 class=\"alert alert-danger\">\n              Age is required\n            </div>\n            \n            <label for=\"name\">Photo ID</label>\n            <input type=\"text\" class=\"form-control\" id=\"photoId\" required [(ngModel)]=\"employee.photoId\" name=\"photoId\"\n                   #photoId=\"ngModel\" >\n            <div [hidden]=\"photoId.valid || photoId.pristine\"\n                 class=\"alert alert-danger\">\n              Photo ID is required\n            </div>\n           \n            \n            <br>\n            <br>\n            <button class=\"btn btn-success\" [disabled]=\"!employeeForm.form.valid\" (click)=\"save(employee)\">Create</button>\n          </form>\n          \n        </div>\n\n",
            styles: ["\n\n  img{\n    max-height: 200px;\n  }\n\n\n"]
        }), 
        __metadata('design:paramtypes', [EmployeeService, Location])
    ], EmployeeNewComponent);
    return EmployeeNewComponent;
}());
//# sourceMappingURL=/Users/JairoMan/Desktop/Angular/EmployeeProject/src/app/employee/employee-new.component.js.map