import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyPlanFormComponent } from './emergency-plan-form.component';

describe('EmergencyPlanFormComponent', () => {
  let component: EmergencyPlanFormComponent;
  let fixture: ComponentFixture<EmergencyPlanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyPlanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyPlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
