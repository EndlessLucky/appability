import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { XeroPaymentsDataSource } from '../../data-sources/xero-payments.data-source';

@Component({
    selector: 'app-xero-payments-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Xero Payments list';

    displayedColumns = [
        'select',

        'idAuto',                // for column: "id_auto"
        'id',                // for column: "ID"
        'contactname',                // for column: "ContactName"
        'emailaddress',                // for column: "EmailAddress"
        'poaddressline1',                // for column: "POAddressLine1"
        'poaddressline2',                // for column: "POAddressLine2"
        'poaddressline3',                // for column: "POAddressLine3"
        'poaddressline4',                // for column: "POAddressLine4"
        'pocity',                // for column: "POCity"
        'poregion',                // for column: "PORegion"
        'popostalcode',                // for column: "POPostalCode"
        'pocountry',                // for column: "POCountry"
        'saaddressline1',                // for column: "SAAddressLine1"
        'saaddressline2',                // for column: "SAAddressLine2"
        'saaddressline3',                // for column: "SAAddressLine3"
        'saaddressline4',                // for column: "SAAddressLine4"
        'sacity',                // for column: "SACity"
        'saregion',                // for column: "SARegion"
        'sapostalcode',                // for column: "SAPostalCode"
        'sacountry',                // for column: "SACountry"
        'invoicenumber',                // for column: "InvoiceNumber"
        'reference',                // for column: "Reference"
        'invoicedate',                // for column: "InvoiceDate"
        'duedate',                // for column: "DueDate"
        'planneddate',                // for column: "PlannedDate"
        'total',                // for column: "Total"
        'taxtotal',                // for column: "TaxTotal"
        'invoiceamountpaid',                // for column: "InvoiceAmountPaid"
        'invoiceamountdue',                // for column: "InvoiceAmountDue"
        'inventoryitemcode',                // for column: "InventoryItemCode"
        'description',                // for column: "Description"
        'quantity',                // for column: "Quantity"
        'unitamount',                // for column: "UnitAmount"
        'discount',                // for column: "Discount"
        'lineamount',                // for column: "LineAmount"
        'accountcode',                // for column: "AccountCode"
        'taxtype',                // for column: "TaxType"
        'taxamount',                // for column: "TaxAmount"
        'trackingname1',                // for column: "TrackingName1"
        'trackingoption1',                // for column: "TrackingOption1"
        'trackingname2',                // for column: "TrackingName2"
        'trackingoption2',                // for column: "TrackingOption2"
        'currency',                // for column: "Currency"
        'type',                // for column: "Type"
        'sent',                // for column: "Sent"
        'status',                // for column: "Status"



        'actions'
    ];

    ngOnInit() {
        this.dataSource = new XeroPaymentsDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
