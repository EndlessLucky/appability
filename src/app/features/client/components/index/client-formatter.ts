import { UniverseFormat } from '../../../../shared/components/formats/universe-format';

export class ClientFormatter implements UniverseFormat {

  private model : any;

  constructor(obj : any) {
    this.model = obj;
  }

  getFormatter() {

    return {
      red : +this.model?.unscheduledActiveHours == 0,
      green : (+this.model?.totalActiveHours != 0 && +this.model?.unscheduledActiveHours == 0) || (+this.model?.functionalAssessmentInterviewFormCompleted == 1),
      edit_pencil_icon : +this.model?.serviceAgreementSignedandSaved == 1,
      check_icon : +this.model?.has_15_054 == 1,
      blue : +this.model?.functionalAssessmentInterviewFormCompleted != 1
    }
  }

}