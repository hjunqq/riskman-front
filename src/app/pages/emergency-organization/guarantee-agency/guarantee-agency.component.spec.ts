import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaranteeAgencyComponent } from './guarantee-agency.component';

describe('GuaranteeAgencyComponent', () => {
  let component: GuaranteeAgencyComponent;
  let fixture: ComponentFixture<GuaranteeAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuaranteeAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuaranteeAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
