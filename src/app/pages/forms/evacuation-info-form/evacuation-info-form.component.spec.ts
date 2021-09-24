import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvacuationInfoFormComponent } from './evacuation-info-form.component';

describe('EvacuationInfoFormComponent', () => {
  let component: EvacuationInfoFormComponent;
  let fixture: ComponentFixture<EvacuationInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvacuationInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvacuationInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
