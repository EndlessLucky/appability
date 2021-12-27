import { UniverseFormat } from '../../../../shared/components/formats/universe-format';

export class StatusFormatter implements UniverseFormat {

  private model : any;

  constructor(obj : any) {
    this.model = obj;
  }

  getFormatter() {
    const status : string = this.model?.status;
    const successful : string = this.model?.successful;
    return {
      yellow : (status != null && status.toLowerCase() == 'cancelled' && !successful),
      cyan : (status != null && status.toLowerCase() == 'to be recovered from new plan' && !successful),
      purple : (status != null && status.toLowerCase() == 'sent to provider.servicebookings@ndis.gov.au' && !successful),
      red : (status != null && status.toLowerCase() == 'rejected' && !successful),
      orange : (status != null && status.toLowerCase() == 'pending payment' && !successful),
      green : (status != null && status.toLowerCase() == 'paid'),
    }
  }

}