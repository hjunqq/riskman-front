import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyOrganizationComponent } from './emergency-organization.component';

describe('EmergencyOrganizationComponent', () => {
  let component: EmergencyOrganizationComponent;
  let fixture: ComponentFixture<EmergencyOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
