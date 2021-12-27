import { UniverseFormat } from '../../../../shared/components/formats/universe-format';

export class AddressFormatter implements UniverseFormat {

  private model : any;

  constructor(obj : any) {
    this.model = obj;
  }

  getFormatter() {
    return {
      size_02 : +this.model?.address == 1,
    }
  }

}