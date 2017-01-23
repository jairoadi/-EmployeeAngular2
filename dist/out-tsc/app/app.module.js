var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee/employee-details.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeService } from './employee/employee.service';
import { EmployeeEditComponent } from './employee/employee-edit.component';
import { EmployeeNewComponent } from './employee/employee-new.component';
var appRoutes = [
    { path: 'home/home', component: HomeComponent },
    { path: 'employee/employee', component: EmployeeComponent },
    { path: 'employee/employee-edit/:id', component: EmployeeEditComponent },
    { path: 'employee/employee-new', component: EmployeeNewComponent },
    { path: '**', component: HomeComponent }
];
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/JairoMan/Desktop/Angular/EmployeeProject/src/app/app.module.js.map