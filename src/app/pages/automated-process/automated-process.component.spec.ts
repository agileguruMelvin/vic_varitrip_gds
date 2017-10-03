import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatedProcessComponent } from './automated-process.component';

describe('AutomatedProcessComponent', () => {
  let component: AutomatedProcessComponent;
  let fixture: ComponentFixture<AutomatedProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomatedProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatedProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
