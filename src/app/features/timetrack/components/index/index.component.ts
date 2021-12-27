import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { TimetrackDataSource } from '../../data-sources/timetrack.data-source';

@Component({
    selector: 'app-timetrack-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Timetrack list';

    displayedColumns = [
        'select',

        'idAuto',                // for column: "id_auto"
        'id',                // for column: "ID"
        'lastModified',                // for column: "last_modified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'staff',                // for column: "Staff"
        'approvedByKeyConsultant',                // for column: "Approved by Key Consultant"
        'client',                // for column: "Client"
        'workType',                // for column: "Work Type"
        'notes',                // for column: "Notes"
        'pinThisNoteToClient',                // for column: "Pin this Note to Client"
        'calendarEntry',                // for column: "Calendar Entry"
        'delivered',                // for column: "Delivered"
        'billable',                // for column: "Billable"
        'reasonUnbillable',                // for column: "Reason Unbillable"
        'serviceBooking',                // for column: "Service Booking"
        'serviceBookingDetail',                // for column: "Service Booking Detail"
        'contractorInvoice',                // for column: "Contractor Invoice"
        'invoiced',                // for column: "Invoiced"
        'paymentRequest',                // for column: "Payment Request"
        'date',                // for column: "Date"
        'startTime',                // for column: "Start Time"
        'endDate',                // for column: "End Date"
        'endTime',                // for column: "End Time"
        'hoursFromCalendar',                // for column: "Hours From Calendar"
        'audioUrl',                // for column: "Audio URL"
        'fileUrl',                // for column: "File Url"
        'timeDiscussed',                // for column: "Time Discussed"
        'didYouProvideMenoringmodellingToAnotherTeamMember',                // for column: "Did you provide Menoring...



        'actions'
    ];

    ngOnInit() {
        this.dataSource = new TimetrackDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
