import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliesStorageFormComponent } from './supplies-storage-form.component';

describe('SuppliesStorageFormComponent', () => {
  let component: SuppliesStorageFormComponent;
  let fixture: ComponentFixture<SuppliesStorageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliesStorageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliesStorageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
