import { UniverseFormat } from '../../../../shared/components/formats/universe-format';

export class ClientFormatter implements UniverseFormat {
  private model : any;

  constructor(obj : any) {
    this.model = obj;
  }

  getFormatter() {
    return {
      bold : this?.model.client? true : false
    }
  }
}