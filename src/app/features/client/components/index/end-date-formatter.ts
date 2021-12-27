import { UniverseFormat } from '../../../../shared/components/formats/universe-format';

export class EndDateFormatter implements UniverseFormat {

  private model : any;

  constructor(obj : any) {
    this.model = obj;
  }

  getFormatter() {
    const current = new Date();
    current.setDate(current.getDate() + 28);
    const rule = this.model?.endDate != null && this.model.endDate < current;
    return {
      red : rule,
      underline : rule,
      size_12 : rule
    }
  }

}