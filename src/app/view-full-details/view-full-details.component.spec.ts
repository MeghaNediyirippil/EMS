import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFullDetailsComponent } from './view-full-details.component';

describe('ViewFullDetailsComponent', () => {
  let component: ViewFullDetailsComponent;
  let fixture: ComponentFixture<ViewFullDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFullDetailsComponent]
    });
    fixture = TestBed.createComponent(ViewFullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
