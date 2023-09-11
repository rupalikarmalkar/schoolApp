import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRegistorComponent } from './booking-registor.component';

describe('BookingRegistorComponent', () => {
  let component: BookingRegistorComponent;
  let fixture: ComponentFixture<BookingRegistorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingRegistorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingRegistorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
