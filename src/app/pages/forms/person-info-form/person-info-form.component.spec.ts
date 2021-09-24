import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInfoFormComponent } from './person-info-form.component';

describe('PersonInfoFormComponent', () => {
  let component: PersonInfoFormComponent;
  let fixture: ComponentFixture<PersonInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
