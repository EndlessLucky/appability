import { UniverseFormat } from '../../../../shared/components/formats/universe-format';

export class RemainingHoursToWorkFormatter implements UniverseFormat {

  private model : any;

  constructor(obj : any) {
    this.model = obj;
  }

  getFormatter() {
    const current = new Date().toLocaleDateString();
    return {
      red : this.model?.revisedEndDate == null && this.model?.sREndDate < current && this.model?.revisedEndDate < current,
    }
  }

}