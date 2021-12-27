import { UniverseFormat } from '../../../../shared/components/formats/universe-format';
import { PersonFormatter } from './person-formatter';
import { ClientFormatter } from './client-formatter';

export class Formatter implements UniverseFormat {
  private formatter : any;

  private personFormatter : any;
  private clientFormatter : any;

  constructor(obj : any) {
    this.personFormatter = new PersonFormatter(obj).getFormatter();
    this.clientFormatter = new ClientFormatter(obj).getFormatter();
  }

  getFormatter() {
    this.formatter = {
      person : this.personFormatter,
      client : this.clientFormatter
    }
    return this.formatter;
  }

}