import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertopDamBreakComponent } from './overtop-dam-break.component';

describe('OvertopDamBreakComponent', () => {
  let component: OvertopDamBreakComponent;
  let fixture: ComponentFixture<OvertopDamBreakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvertopDamBreakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OvertopDamBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
