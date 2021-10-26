import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalAndBasisComponent } from './principal-and-basis.component';

describe('PrincipalAndBasisComponent', () => {
  let component: PrincipalAndBasisComponent;
  let fixture: ComponentFixture<PrincipalAndBasisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalAndBasisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalAndBasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
