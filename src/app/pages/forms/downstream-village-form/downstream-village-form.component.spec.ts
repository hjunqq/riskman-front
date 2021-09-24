import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownstreamVillageFormComponent } from './downstream-village-form.component';

describe('DownstreamVillageFormComponent', () => {
  let component: DownstreamVillageFormComponent;
  let fixture: ComponentFixture<DownstreamVillageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownstreamVillageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownstreamVillageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
