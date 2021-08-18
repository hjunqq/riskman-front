import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalIncidentAnalysisComponent } from './critical-incident-analysis.component';

describe('CriticalIncidentAnalysisComponent', () => {
  let component: CriticalIncidentAnalysisComponent;
  let fixture: ComponentFixture<CriticalIncidentAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticalIncidentAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalIncidentAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
