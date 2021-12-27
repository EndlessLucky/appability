import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class ServiceBookingDetailsDataSource extends RestApiDataSource implements RestApiDataSourceInterface {
    searchableFields = [
        'id',                // for column: "id"
        // 'lastmodified',                // for column: "LastModified"
        // 'lastmodifiedby',                // for column: "LastModifiedBy"

        // @see: oV8GXspn
        // 'serviceBooking',                // for column: "Service Booking"
      'supportBudget',                // for column: "Support Budget"

      // @see: oV8GXspn
      // 'supportItemId',                // for column: "Support Item ID"
      'supportItemName',                // for column: "Support Item Name"
      'descriptionOfServicesOutcomeMeasures',                // for column: "Description of Services & Outcome Measures"
        'hours',                // for column: "Hours"
        'allocatedAmount',                // for column: "Allocated Amount"
        'fundsManagement',                // for column: "Funds Management"
        'enteredPre3July2019',                // for column: "Entered Pre 3 July 2019"
    ];
}
