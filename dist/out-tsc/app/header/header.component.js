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
export var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Component({
            selector: 'header',
            template: "\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n          <!-- Brand and toggle get grouped for better mobile display -->\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\n             data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" routerLinkActive=\"active\" routerLink=\"home/home\">MTC Employees</a>\n          </div>\n      \n          <!-- Collect the nav links, forms, and other content for toggling -->\n          <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n              <li class=\"\"><a routerLinkActive=\"active\" routerLink=\"employee/employee\">Employees List</a></li>\n              <li><a routerLinkActive=\"active\" routerLink=\"employee/employee-new\"><span class=\"glyphicon glyphicon-user\">\n              </span> New Employee</a></li>\n            </ul>\n      \n          </div><!-- /.navbar-collapse -->\n        </div><!-- /.container-fluid -->\n      </nav>\n\n",
            styles: ["\n\n        /*this css belongs to the navbar */\n        .navbar-default{\n          background-color: #364758;\n          \n        }\n        \n        .navbar-default .navbar-nav>li>a {\n          color: white;\n        }\n        .navbar-default .navbar-nav>li>a:hover {\n          color: #a0b3c5;\n        }\n        \n        .navbar-default .navbar-brand {\n            color: white;\n        }\n          \n        .navbar-default .navbar-brand:hover {\n            color: #a0b3c5;\n        }\n          \n        \n        .active {\n        background-color: #27333f;\n        \n        }\n        \n\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/Users/JairoMan/Desktop/Angular/EmployeeProject/src/app/header/header.component.js.map