import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { AbilityConsultantsReferralFormModel } from '../models/ability-consultants-referral-form.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AbilityConsultantsReferralFormService extends RestApiService {
    model = AbilityConsultantsReferralFormModel;
    modelName = 'ability_consultants_referral_form';
    apiName = 'ability-consultants-referral-form';
    searchableFields = ['id', 'firstNameOfReferrer', 'lastNameOfReferrer'];
}
