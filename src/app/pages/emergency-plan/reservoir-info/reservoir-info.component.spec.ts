import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservoirInfoComponent } from './reservoir-info.component';

describe('ReservoirInfoComponent', () => {
  let component: ReservoirInfoComponent;
  let fixture: ComponentFixture<ReservoirInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservoirInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservoirInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
