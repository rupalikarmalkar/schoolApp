import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboargComponent } from './dashboarg.component';

describe('DashboargComponent', () => {
  let component: DashboargComponent;
  let fixture: ComponentFixture<DashboargComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboargComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboargComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
