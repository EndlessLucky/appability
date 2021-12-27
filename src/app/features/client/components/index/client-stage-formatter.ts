import { UniverseFormat } from '../../../../shared/components/formats/universe-format';

export class ClientStageFormatter implements UniverseFormat {

  private model : any;

  constructor(obj : any) {
    this.model = obj;
  }

  getFormatter() {

    return {
      bold : +this.model?.clientStage == 1,
    }
  }

}