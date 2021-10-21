import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringChartComponent } from './engineering-chart.component';

describe('EngineeringChartComponent', () => {
  let component: EngineeringChartComponent;
  let fixture: ComponentFixture<EngineeringChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
