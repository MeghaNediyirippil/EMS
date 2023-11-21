import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeDetailsComponent } from './view-employee-details.component';

describe('ViewEmployeeDetailsComponent', () => {
  let component: ViewEmployeeDetailsComponent;
  let fixture: ComponentFixture<ViewEmployeeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEmployeeDetailsComponent]
    });
    fixture = TestBed.createComponent(ViewEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
