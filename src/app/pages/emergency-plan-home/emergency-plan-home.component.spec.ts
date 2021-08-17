import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyPlanHomeComponent } from './emergency-plan-home.component';

describe('EmergencyPlanHomeComponent', () => {
  let component: EmergencyPlanHomeComponent;
  let fixture: ComponentFixture<EmergencyPlanHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyPlanHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyPlanHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
