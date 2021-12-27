import { Component, OnInit, Input, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { UniverseFormat } from '../universe-format';

@Component({
  selector: 'app-payment-request-format',
  templateUrl: './payment-request-format.component.html',
  styleUrls: ['./payment-request-format.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class PaymentRequestFormatComponent implements OnInit {

  @Input() text : string;
  @Input() model : any;
  @Input() colName : string;
  customClass : UniverseFormat;

  constructor() { }

  ngOnInit(): void {
    const rule = this.model?.adapt(this.model);
    if(rule) this.customClass = rule[this.colName];
  }

  ngOnChanges(changes : SimpleChanges) {
    if (changes.text && changes.model) {
      //we can do some functions for view template later
      console.log('not changing');
    }
  }

}
