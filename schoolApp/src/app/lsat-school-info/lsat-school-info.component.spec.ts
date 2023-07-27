import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsatSchoolInfoComponent } from './lsat-school-info.component';

describe('LsatSchoolInfoComponent', () => {
  let component: LsatSchoolInfoComponent;
  let fixture: ComponentFixture<LsatSchoolInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsatSchoolInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LsatSchoolInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
