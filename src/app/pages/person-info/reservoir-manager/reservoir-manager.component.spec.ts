import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservoirManagerComponent } from './reservoir-manager.component';

describe('ReservoirManagerComponent', () => {
  let component: ReservoirManagerComponent;
  let fixture: ComponentFixture<ReservoirManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservoirManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservoirManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
