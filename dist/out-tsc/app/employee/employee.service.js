/**
 * Created by JairoMan on 1/13/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Location } from "@angular/common";
export var EmployeeService = (function () {
    function EmployeeService(_http, location) {
        this._http = _http;
        this.location = location;
        this._employeeUrl = 'https://devapplications.mtc.byu.edu/training/v1/api/persons';
        this._headers = new Headers({ 'Content-Type': 'application/json' });
    }
    //this method is being used to display all the employees from the API. the Json will be returned as an Array
    EmployeeService.prototype.getAllEmployees = function () {
        return this._http.get(this._employeeUrl)
            .toPromise()
            .then(function (returned) { return returned.json(); }); //CHANGED THE ARRAY test
    };
    //this method will return a single employee from the API. This method will return a single employee object
    EmployeeService.prototype.getSingleEmployee = function (employeeId) {
        var singleUrl = this._employeeUrl + "/" + employeeId;
        console.log(singleUrl);
        return this._http.get(singleUrl)
            .toPromise()
            .then(function (returned) { return returned.json(); });
    };
    //this method will updated any changes made
    EmployeeService.prototype.updateEmployee = function (employee) {
        var singleUrlUpdate = this._employeeUrl + "/" + employee.id;
        return this._http
            .put(singleUrlUpdate, JSON.stringify(employee), { headers: this._headers })
            .toPromise()
            .then(function () { return employee; });
    };
    EmployeeService.prototype.createEmployee = function (employee) {
        var newUrl = this._employeeUrl + "/";
        console.log(employee); //debugging
        return this._http
            .post(newUrl, JSON.stringify(employee), { headers: this._headers })
            .toPromise()
            .then(function (returned) { return returned.json(); });
    };
    EmployeeService.prototype.delete = function (employeeId) {
        var singleUrl = this._employeeUrl + "/" + employeeId;
        return this._http.delete(singleUrl, { headers: this._headers })
            .toPromise()
            .then(function () { return null; });
    };
    EmployeeService.prototype.returnPage = function () {
        this.location.back();
    };
    EmployeeService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, Location])
    ], EmployeeService);
    return EmployeeService;
}());
//# sourceMappingURL=/Users/JairoMan/Desktop/Angular/EmployeeProject/src/app/employee/employee.service.js.map