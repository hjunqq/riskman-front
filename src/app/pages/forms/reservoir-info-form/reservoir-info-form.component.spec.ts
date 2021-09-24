import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservoirInfoFormComponent } from './reservoir-info-form.component';

describe('ReservoirInfoFormComponent', () => {
  let component: ReservoirInfoFormComponent;
  let fixture: ComponentFixture<ReservoirInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservoirInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservoirInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
