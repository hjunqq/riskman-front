import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservoirDetailFormComponent } from './reservoir-detail-form.component';

describe('ReservoirDetailFormComponent', () => {
  let component: ReservoirDetailFormComponent;
  let fixture: ComponentFixture<ReservoirDetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservoirDetailFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservoirDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
