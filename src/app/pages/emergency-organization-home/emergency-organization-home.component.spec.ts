import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyOrganizationHomeComponent } from './emergency-organization-home.component';

describe('EmergnecyOrganizationHomeComponent', () => {
  let component: EmergencyOrganizationHomeComponent;
  let fixture: ComponentFixture<EmergencyOrganizationHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyOrganizationHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyOrganizationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
