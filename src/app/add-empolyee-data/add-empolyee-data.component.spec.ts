import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpolyeeDataComponent } from './add-empolyee-data.component';

describe('AddEmpolyeeDataComponent', () => {
  let component: AddEmpolyeeDataComponent;
  let fixture: ComponentFixture<AddEmpolyeeDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmpolyeeDataComponent]
    });
    fixture = TestBed.createComponent(AddEmpolyeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
