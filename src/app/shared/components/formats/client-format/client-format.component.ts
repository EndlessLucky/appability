import { Component, OnInit, Input, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { UniverseFormat } from '../universe-format';

@Component({
  selector: 'app-client-format',
  templateUrl: './client-format.component.html',
  styleUrls: ['./client-format.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ClientFormatComponent implements OnInit {

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
