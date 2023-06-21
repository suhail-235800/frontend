import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingbodyComponent } from './ratingbody.component';

describe('RatingbodyComponent', () => {
  let component: RatingbodyComponent;
  let fixture: ComponentFixture<RatingbodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingbodyComponent]
    });
    fixture = TestBed.createComponent(RatingbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
