import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { ServiceBookingDetailsDataSource } from '../../data-sources/service-booking-details.data-source';

@Component({
    selector: 'app-service-booking-details-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Service Booking Details';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        // 'lastmodified',                // for column: "LastModified"
        // 'lastmodifiedby',                // for column: "LastModifiedBy"
        'serviceBooking',                // for column: "Service Booking"
        'supportBudget',                // for column: "Support Budget"
        'supportItemId',                // for column: "Support Item ID"
        'supportItemName',                // for column: "Support Item Name"
        'descriptionOfServicesOutcomeMeasures',                // for column: "Description of Services & Outcome Measures"
        'hours',                // for column: "Hours"
        'allocatedAmount',                // for column: "Allocated Amount"
        'fundsManagement',                // for column: "Funds Management"
        'enteredPre3July2019',                // for column: "Entered Pre 3 July 2019"


        'actions'
    ];

    ngOnInit() {
        this.dataSource = new ServiceBookingDetailsDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
