import { UniverseFormat } from '../../../../shared/components/formats/universe-format';

export class RevisedEndDateFormatter implements UniverseFormat {

  private model : any;

  constructor(obj : any) {
    this.model = obj;
  }

  getFormatter() {

    return {
      red : +this.model?.revisedEndDate == 1
    }
  }

}