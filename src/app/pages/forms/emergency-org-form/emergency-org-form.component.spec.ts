import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyOrgFormComponent } from './emergency-org-form.component';

describe('EmergencyOrgFormComponent', () => {
  let component: EmergencyOrgFormComponent;
  let fixture: ComponentFixture<EmergencyOrgFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyOrgFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyOrgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
