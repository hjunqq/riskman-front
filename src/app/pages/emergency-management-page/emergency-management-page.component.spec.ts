import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyManagementPageComponent } from './emergency-management-page.component';

describe('EmergencyManagementPageComponent', () => {
  let component: EmergencyManagementPageComponent;
  let fixture: ComponentFixture<EmergencyManagementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyManagementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
