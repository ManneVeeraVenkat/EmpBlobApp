import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmployeedetailsComponent } from './get-employeedetails.component';

describe('GetEmployeedetailsComponent', () => {
  let component: GetEmployeedetailsComponent;
  let fixture: ComponentFixture<GetEmployeedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetEmployeedetailsComponent]
    });
    fixture = TestBed.createComponent(GetEmployeedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
