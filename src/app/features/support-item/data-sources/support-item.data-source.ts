import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class SupportItemDataSource extends RestApiDataSource implements RestApiDataSourceInterface {
    searchableFields = [
        'id',                // for column: "id"
        'supportcategoryname',                // for column: "SupportCategoryName"
        'supportitemdescription',                // for column: "SupportItemDescription"
        'hourlyRate',                // for column: "Hourly Rate"
        'isclientbillable',                // for column: "IsClientBillable"
        'key',                // for column: "Key"
        'active',                // for column: "Active"
        'end',                // for column: "End"
        'registrationGroupName',                // for column: "Registration Group Name"
        'a2019HourlyRate',                // for column: "2019 Hourly Rate"
    ];
}
