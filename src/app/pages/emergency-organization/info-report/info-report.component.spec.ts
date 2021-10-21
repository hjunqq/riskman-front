import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoReportComponent } from './info-report.component';

describe('InfoReportComponent', () => {
  let component: InfoReportComponent;
  let fixture: ComponentFixture<InfoReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
