import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class ContractorDetailDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'businessName',                // for column: "Business Name"
        'abn',                // for column: "ABN"
        'accountName',                // for column: "Account Name"
        'bsb',                // for column: "BSB"
        'accountNumber',                // for column: "Account Number"
        'businessAddress',                // for column: "Business Address"
        'currentContractUrl',                // for column: "Current Contract URL"
        'superChoiceFormUrl',                // for column: "Super Choice Form URL"


    ];
}
