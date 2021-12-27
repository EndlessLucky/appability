import { Component, OnInit, Input, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { UniverseFormat } from '../universe-format';

@Component({
  templateUrl: './person-format.component.html',
  styleUrls: ['./person-format.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class PersonFormatComponent implements OnInit {

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
