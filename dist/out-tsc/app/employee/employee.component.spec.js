import { async, TestBed } from '@angular/core/testing';
import { EmployeeComponent } from './employee.component';
describe('EmployeeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EmployeeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EmployeeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/JairoMan/Desktop/Angular/EmployeeProject/src/app/employee/employee.component.spec.js.map