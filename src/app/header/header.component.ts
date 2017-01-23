import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <nav class="navbar navbar-default">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
             data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" routerLinkActive="active" routerLink="home/home">MTC Employees</a>
          </div>
      
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class=""><a routerLinkActive="active" routerLink="employee/employee">Employees List</a></li>
              <li><a routerLinkActive="active" routerLink="employee/employee-new"><span class="glyphicon glyphicon-user">
              </span> New Employee</a></li>
            </ul>
            
            <ul>
            
            </ul>
      
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>

`,
  styles: [`

        /*this css belongs to the navbar */
        .navbar-default{
          background-color: #364758;
          
        }
        
        .navbar-default .navbar-nav>li>a {
          color: white;
        }
        .navbar-default .navbar-nav>li>a:hover {
          color: #a0b3c5;
        }
        
        .navbar-default .navbar-brand {
            color: white;
        }
          
        .navbar-default .navbar-brand:hover {
            color: #a0b3c5;
        }
          
        
        .active {
        background-color: #27333f;
        
        }
        

`]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
