import { UniverseFormat } from '../../../../shared/components/formats/universe-format';
import { ClientFormatter } from './client-formatter';
import { ClientStageFormatter } from './client-stage-formatter';
import { RemainingHoursToWorkFormatter } from './remaining-hours-to-work-formatter';
import { RevisedEndDateFormatter } from './revised-end-date-formatter';
import { SafeHomeVisitPolicyFormatter } from './safe-home-visit-policy-formatter';
import { EndDateFormatter } from './end-date-formatter';
import { AddressFormatter } from './address-formatter';

export class Formatter implements UniverseFormat {

  private formatter : any;

  private clientFormatter : any;
  private clientStageFormatter : any;
  private remainingHourstoWorkFormatter : any;
  private revisedEndDateFormatter : any;
  private safehomeVisitPolicyFormatter : any;
  private endDateFormatter : any;
  private addressFormatter : any;

  constructor(obj : any) {
    this.clientFormatter = new ClientFormatter(obj).getFormatter();
    this.clientStageFormatter = new ClientStageFormatter(obj).getFormatter();
    this.remainingHourstoWorkFormatter = new RemainingHoursToWorkFormatter(obj).getFormatter();
    this.revisedEndDateFormatter = new RevisedEndDateFormatter(obj).getFormatter();
    this.safehomeVisitPolicyFormatter = new SafeHomeVisitPolicyFormatter(obj).getFormatter();
    this.endDateFormatter = new EndDateFormatter(obj).getFormatter();
    this.addressFormatter = new AddressFormatter(obj).getFormatter();
  }

  getFormatter() {
    this.formatter = {
      client : this.clientFormatter,
      clientStage : this.clientStageFormatter,
      remainingHoursToWork : this.remainingHourstoWorkFormatter,
      revisedEndDate : this.revisedEndDateFormatter,
      safe_home_visit_policy : this.safehomeVisitPolicyFormatter,
      endDate : this.endDateFormatter,
      address : this.addressFormatter
    }
    return this.formatter;
  }

}