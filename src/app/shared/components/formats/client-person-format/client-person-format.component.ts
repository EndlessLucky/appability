import { Component, OnInit, Input, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
// import { ClientPersonAdapter } from '../../../../features/client-person/models/client-person-adapter';
import { UniverseFormat } from '../universe-format';


@Component({
  templateUrl: './client-person-format.component.html',
  styleUrls: ['./client-person-format.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ClientPersonFormatComponent implements OnInit {

  @Input() text : string;
  @Input() model : any;
  @Input() colName : string;
  customClass : UniverseFormat;

  constructor() {
  }

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
