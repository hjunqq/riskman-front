import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityFormComponent } from './authority-form.component';

describe('AuthorityFormComponent', () => {
  let component: AuthorityFormComponent;
  let fixture: ComponentFixture<AuthorityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorityFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
