import { UniverseFormat } from '../../../../shared/components/formats/universe-format';
import { StatusFormatter } from './status-formatter';

export class Formatter implements UniverseFormat{

  private formatter : any;

  private claimReferenceFormatter : any;
  private statusFormatter : any;


  constructor(obj : any) {
    this.statusFormatter = new StatusFormatter(obj).getFormatter();
  }

  getFormatter() {
    this.formatter = {
      status : this.statusFormatter
    }
    return this.formatter;
  }

}