import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRequestFormatComponent } from './payment-request-format.component';

describe('PaymentRequestFormatComponent', () => {
  let component: PaymentRequestFormatComponent;
  let fixture: ComponentFixture<PaymentRequestFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentRequestFormatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentRequestFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
