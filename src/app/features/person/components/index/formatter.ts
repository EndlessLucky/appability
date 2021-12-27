import { UniverseFormat } from '../../../../shared/components/formats/universe-format';
import { FirstnameFormatter } from './firstname-formatter';
import { SurnameFormatter } from './surname-formatter';
import { UseremailFormatter } from './useremail-formatter';

export class Formatter implements UniverseFormat{

  private formatter : any;

  private firstnameFormatter : any;
  private surnameFormatter : any;
  private useremailFormatter : any;
  

  constructor(obj : any) {
    this.firstnameFormatter = new FirstnameFormatter(obj).getFormatter();
    this.surnameFormatter = new SurnameFormatter(obj).getFormatter();
    this.useremailFormatter = new UseremailFormatter(obj).getFormatter();
  }

  getFormatter() {
    this.formatter = {
      firstname : this.firstnameFormatter,
      surname : this.surnameFormatter,
      useremail : this.useremailFormatter
    }
    return this.formatter;
  }

}