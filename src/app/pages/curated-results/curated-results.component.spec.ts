import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratedResultsComponent } from './curated-results.component';

describe('CuratedResultsComponent', () => {
  let component: CuratedResultsComponent;
  let fixture: ComponentFixture<CuratedResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuratedResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratedResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
