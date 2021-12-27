import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class TimetrackModel extends Deserializable implements ToString {
    public idAuto: number;                // for column: "id_auto"
    public id: string;                // for column: "ID"
    public lastModified: string;                // for column: "last_modified"
    public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public staff: string;                // for column: "Staff"
    public approvedByKeyConsultant: boolean;                // for column: "Approved by Key Consultant"
    public client: string;                // for column: "Client"
    public workType: string;                // for column: "Work Type"
    public notes: string;                // for column: "Notes"
    public pinThisNoteToClient: boolean;                // for column: "Pin this Note to Client"
    public calendarEntry: string;                // for column: "Calendar Entry"
    public delivered: boolean;                // for column: "Delivered"
    public billable: boolean;                // for column: "Billable"
    public reasonUnbillable: string;                // for column: "Reason Unbillable"
    public serviceBooking: string;                // for column: "Service Booking"
    public serviceBookingDetail: string;                // for column: "Service Booking Detail"
    public contractorInvoice: string;                // for column: "Contractor Invoice"
    public invoiced: string;                // for column: "Invoiced"
    public paymentRequest: string;                // for column: "Payment Request"
    public date: string;                // for column: "Date"
    public startTime: string;                // for column: "Start Time"
    public endDate: string;                // for column: "End Date"
    public endTime: string;                // for column: "End Time"
    public hoursFromCalendar: string;                // for column: "Hours From Calendar"
    public audioUrl: string;                // for column: "Audio URL"
    public fileUrl: string;                // for column: "File Url"
    public timeDiscussed: string;                // for column: "Time Discussed"
    public didYouProvideMenoringmodellingToAnotherTeamMember: boolean;                // for column: "Did you provide Menoring/Modelling to another Team Member"


    getKeys() {
        return [
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
        ];
    }

    toString() {
        return this.id + ' ';
    }
}
