import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class ReferralFormDataSource extends RestApiDataSource implements RestApiDataSourceInterface {
    searchableFields = ['id', 'firstNameOfReferrer', 'lastNameOfReferrer'];
}
