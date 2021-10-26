import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperStandardGradingComponent } from './super-standard-grading.component';

describe('SuperStandardGradingComponent', () => {
  let component: SuperStandardGradingComponent;
  let fixture: ComponentFixture<SuperStandardGradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperStandardGradingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperStandardGradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
