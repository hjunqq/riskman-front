import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandAgencyComponent } from './command-agency.component';

describe('CommandAgencyComponent', () => {
  let component: CommandAgencyComponent;
  let fixture: ComponentFixture<CommandAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
