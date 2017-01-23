/**
 * Created by JairoMan on 1/13/17.
 */

/*this is one of the most important classes, this class will communicate(request and receive) with the restful API
* and render whatever the result of the communication is*/

import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import {Employee} from './employee';

import {Observable} from 'rxjs/Rx';
import {Observer} from 'rxjs/Rx';
import {Location} from "@angular/common";

@Injectable()
export class EmployeeService {

  private _employeeUrl ='https://devapplications.mtc.byu.edu/training/v1/api/persons';
  private _headers =  new Headers({'Content-Type':'application/json'});


  constructor (private _http: Http, private location: Location) {}

  //this method is being used to display all the employees from the API. the Json will be returned as an Array
  getAllEmployees(): Promise<Employee[]> {

    return this._http.get(this._employeeUrl)
      .toPromise()
      .then(returned => returned.json() as Employee []);//CHANGED THE ARRAY test

  }

  //this method will return a single employee from the API. This method will return a single employee object
  getSingleEmployee(employeeId: number): Promise<Employee> {
    const singleUrl = `${this._employeeUrl}/${employeeId}`;
    console.log(singleUrl)
    return this._http.get(singleUrl)
      .toPromise()
      .then(returned => returned.json() as Employee);

  }

  //this method will updated any changes made
  updateEmployee(employee): Promise <Employee>{
    const singleUrlUpdate = `${this._employeeUrl}/${employee.id}`;
    return this._http
      .put(singleUrlUpdate, JSON.stringify(employee), {headers: this._headers})
      .toPromise()
      .then(() => employee);

  }

  createEmployee (employee): Promise <Employee>{

    const newUrl = `${this._employeeUrl}/`;

    console.log(employee);//debugging
    return this._http
      .post(newUrl, JSON.stringify(employee), {headers: this._headers})
      .toPromise()
      .then(returned => returned.json() as Employee);
  }

  delete(employeeId: number): Promise <void>{
    const singleUrl = `${this._employeeUrl}/${employeeId}`;
    return this._http.delete(singleUrl, {headers: this._headers})
      .toPromise()
      .then(() => null);
  }


    returnPage(): void {
      this.location.back();
    }


/*
  //this method will return the list of all employees
    getAllEmployees(){

      return this._http.get(this._employeeUrl)
        .map(res => res.json() as Employee[]);
    }

  //this method will receive an employee ID parameter and return the employee URL associated with the ID
    private _getEmployeeUrl(employeeID) {

      return this._employeeUrl + "/" + employeeID;
    }

  //this method will return the employee
    getSingleEmployee(employeeID: number) {

      return this._http.get(this._getEmployeeUrl(employeeID))
        .map(res => res.json());
    }


    getEmployee(employeeId: number){
      return this.getAllEmployees()

    }

  //this method will updated the employee selected
    updateEmployee(employee) {
      return this._http.put(this._getEmployeeUrl(employee.id), JSON.stringify(employee))
        .map(res => res.json());
    }

  //this method will add a new user
    addEmployee(employee){
      return this._http.post(this._employeeUrl, JSON.stringify(employee))
        .map(res => res.json());
    }

  //this method will allow me to delete a selected employee
    deleteEmployee(employeeID){
      return this._http.delete(this._getEmployeeUrl(employeeID))
        .map(res => res.json());
    }

*/
}


