import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreOfferingsComponent } from './core-offerings.component';

describe('CoreOfferingsComponent', () => {
  let component: CoreOfferingsComponent;
  let fixture: ComponentFixture<CoreOfferingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreOfferingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
