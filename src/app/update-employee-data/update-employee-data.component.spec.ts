import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeDataComponent } from './update-employee-data.component';

describe('UpdateEmployeeDataComponent', () => {
  let component: UpdateEmployeeDataComponent;
  let fixture: ComponentFixture<UpdateEmployeeDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEmployeeDataComponent]
    });
    fixture = TestBed.createComponent(UpdateEmployeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
