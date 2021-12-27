import { UniverseFormat } from '../../../../shared/components/formats/universe-format';

export class UseremailFormatter implements UniverseFormat {

  private model : any;

  constructor(obj : any) {
    this.model = obj;
  }

  getFormatter() {
    return {
      bold : this?.model.useremail? true : false,
      active : this?.model.isclient? true : true
    }
  }

}