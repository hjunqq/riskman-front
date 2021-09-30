import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloodRespPersonComponent } from './flood-resp-person.component';

describe('FloodRespPersonComponent', () => {
  let component: FloodRespPersonComponent;
  let fixture: ComponentFixture<FloodRespPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloodRespPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloodRespPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
