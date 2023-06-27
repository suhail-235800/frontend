import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyratingsComponent } from './myratings.component';

describe('MyratingsComponent', () => {
  let component: MyratingsComponent;
  let fixture: ComponentFixture<MyratingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyratingsComponent]
    });
    fixture = TestBed.createComponent(MyratingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
