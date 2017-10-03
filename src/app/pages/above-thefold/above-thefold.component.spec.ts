import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveThefoldComponent } from './above-thefold.component';

describe('AboveThefoldComponent', () => {
  let component: AboveThefoldComponent;
  let fixture: ComponentFixture<AboveThefoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboveThefoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboveThefoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
