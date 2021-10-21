import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyDiagramComponent } from './emergency-diagram.component';

describe('EmergencyDiagramComponent', () => {
  let component: EmergencyDiagramComponent;
  let fixture: ComponentFixture<EmergencyDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
