import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAppraisalStatusComponent } from './safety-appraisal-status.component';

describe('SafetyAppraisalStatusComponent', () => {
  let component: SafetyAppraisalStatusComponent;
  let fixture: ComponentFixture<SafetyAppraisalStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyAppraisalStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAppraisalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
