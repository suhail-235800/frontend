import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingdialogComponent } from './ratingdialog.component';

describe('RatingdialogComponent', () => {
  let component: RatingdialogComponent;
  let fixture: ComponentFixture<RatingdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingdialogComponent]
    });
    fixture = TestBed.createComponent(RatingdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
