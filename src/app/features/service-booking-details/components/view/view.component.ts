import { Component, OnInit } from '@angular/core';
import { DataViewComponent } from '../../../../shared/grid/components/data-view/data-view.component';

@Component({
    selector: 'app-service-booking-details-view',
    templateUrl: '../../../../shared/grid/components/data-view/data-view.component.html',
    styleUrls: ['../../../../shared/grid/components/data-view/data-view.component.scss']
})
export class ViewComponent extends DataViewComponent implements OnInit {
    // title = 'Your custom here';
    apiName = 'service-booking-details';

    displayedFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'serviceBooking',                // for column: "Service Booking"
        'supportBudget',                // for column: "Support Budget"
        'supportItemId',                // for column: "Support Item ID"
        'supportItemName',                // for column: "Support Item Name"
        'descriptionOfServicesOutcomeMeasures',                // for column: "Description of Services & Outcome Measures"
        'hours',                // for column: "Hours"
        'allocatedAmount',                // for column: "Allocated Amount"
        'fundsManagement',                // for column: "Funds Management"
        'enteredPre3July2019',                // for column: "Entered Pre 3 July 2019"
    ];
}

