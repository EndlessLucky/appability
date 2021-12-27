import { UniverseFormat } from '../../../../shared/components/formats/universe-format';

export class SurnameFormatter implements UniverseFormat {

  private model : any;

  constructor(obj : any) {
    this.model = obj;
  }

  getFormatter() {
    return {
      italic : this?.model.useremail ? true : false
    }
  }
}