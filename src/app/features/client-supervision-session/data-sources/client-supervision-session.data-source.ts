import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class ClientSupervisionSessionDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'clientSr',                // for column: "Client SR"
        'supervisionSession',                // for column: "Supervision Session"
        'durationdiscussed',                // for column: "DurationDiscussed"
        'paymentRequest',                // for column: "Payment Request"
        'supervisorInvoice',                // for column: "Supervisor Invoice"


    ];
}
