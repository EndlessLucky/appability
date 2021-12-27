import { UniverseFormat } from '../../../../shared/components/formats/universe-format';

export class SafeHomeVisitPolicyFormatter implements UniverseFormat {

  private model : any;

  constructor(obj : any) {
    this.model = obj;
  }

  getFormatter() {
    const rule = +this.model?.safe_home_visit_policy == 1
    return {
      blue : rule,
      size_06 : rule,
      underline : rule,
      bold : rule
    }
  }

}