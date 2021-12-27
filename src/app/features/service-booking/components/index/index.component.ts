import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { ServiceBookingDataSource } from '../../data-sources/service-booking.data-source';

@Component({
    selector: 'app-service-booking-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Service Bookings';

    displayedColumns = [
        'select',
        'id',                // for column: "id"
        // 'lastmodified',                // for column: "LastModified"
        // 'lastmodifiedby',                // for column: "LastModifiedBy"
        'client',                // for column: "Client"
        'serviceBookingNumber',                // for column: "Service Booking Number"
        'start',                // for column: "Start"
        'end',                // for column: "End"
        'revisedEnd',                // for column: "Revised End"
        'active',                // for column: "Active"
        'isdraft',                // for column: "IsDraft"

        'actions'
    ];

    ngOnInit() {
        this.dataSource = new ServiceBookingDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
