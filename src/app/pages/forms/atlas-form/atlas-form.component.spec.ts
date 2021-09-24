import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasFormComponent } from './atlas-form.component';

describe('AtlasFormComponent', () => {
  let component: AtlasFormComponent;
  let fixture: ComponentFixture<AtlasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
