import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeDetailsComponent } from './edit-employee-details.component';

describe('EditEmployeeDetailsComponent', () => {
  let component: EditEmployeeDetailsComponent;
  let fixture: ComponentFixture<EditEmployeeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEmployeeDetailsComponent]
    });
    fixture = TestBed.createComponent(EditEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
