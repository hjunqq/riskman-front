import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPropsFormComponent } from './project-props-form.component';

describe('ProjectPropsFormComponent', () => {
  let component: ProjectPropsFormComponent;
  let fixture: ComponentFixture<ProjectPropsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPropsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPropsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
