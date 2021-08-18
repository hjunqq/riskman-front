import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringAndWarningComponent } from './monitoring-and-warning.component';

describe('MonitoringAndWarningComponent', () => {
  let component: MonitoringAndWarningComponent;
  let fixture: ComponentFixture<MonitoringAndWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringAndWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringAndWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
