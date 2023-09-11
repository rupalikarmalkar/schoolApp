import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationMasterComponent } from './quotation-master.component';

describe('QuotationMasterComponent', () => {
  let component: QuotationMasterComponent;
  let fixture: ComponentFixture<QuotationMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotationMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
