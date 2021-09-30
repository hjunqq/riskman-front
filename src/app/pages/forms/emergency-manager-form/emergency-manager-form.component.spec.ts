import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyManagerFormComponent } from './emergency-manager-form.component';

describe('EmergencyManagerFormComponent', () => {
  let component: EmergencyManagerFormComponent;
  let fixture: ComponentFixture<EmergencyManagerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyManagerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyManagerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
