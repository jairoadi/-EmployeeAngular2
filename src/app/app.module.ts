import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule, Routes} from '@angular/router';
import { EmployeeDetailsComponent } from './employee/employee-details.component';
import { EmployeeListComponent } from './employee/employee-list.component';


import { EmployeeService } from './employee/employee.service';
import { EmployeeEditComponent } from './employee/employee-edit.component';
import { EmployeeNewComponent } from './employee/employee-new.component';




const appRoutes: Routes = [

  {path:'home/home', component: HomeComponent},
  {path:'employee/employee', component: EmployeeComponent},
  {path:'employee/employee-edit/:id', component: EmployeeEditComponent},
  {path:'employee/employee-new', component: EmployeeNewComponent},
  {path:'**', component: HomeComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    EmployeeNewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    JsonpModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
