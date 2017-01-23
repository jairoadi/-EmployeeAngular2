import { async, TestBed } from '@angular/core/testing';
import { NewEmployeeComponent } from './new-employee.component';
describe('NewEmployeeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NewEmployeeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NewEmployeeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/JairoMan/Desktop/Angular/EmployeeProject/src/app/employee/new-employee.component.spec.js.map