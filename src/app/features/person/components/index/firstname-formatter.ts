import { UniverseFormat } from '../../../../shared/components/formats/universe-format';

export class FirstnameFormatter implements UniverseFormat {

  private model : any;

  constructor(obj : any) {
    this.model = obj;
  }

  getFormatter() {
    let year_birth : number;
    const date_birth = this.model?.dateOfBirth;
    if (date_birth) {
      year_birth = +date_birth.split('/')[2];
    }
    let class_active = false;
    if (this.model?.contractorOwed && this.model?.isActiveStaff) {
      class_active = (this.model.contractorOwed == 'true') && !this.model.isActiveStaff;
    }
    return {
      bold : this.model?.isKeyContactForEmployer,
      active : class_active,
      blue : date_birth ? (new Date().getFullYear() - year_birth < 8) : false
    }
  }

}