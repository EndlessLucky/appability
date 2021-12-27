import { Component, OnInit } from '@angular/core';
import { DataViewComponent } from '../../../../shared/grid/components/data-view/data-view.component';

@Component({
    selector: 'app-contractor-detail-view',
    templateUrl: '../../../../shared/grid/components/data-view/data-view.component.html',
    styleUrls: ['../../../../shared/grid/components/data-view/data-view.component.scss']
})
export class ViewComponent extends DataViewComponent implements OnInit {
    // title = 'Your custom here';
    apiName = 'contractor-detail';

    displayedFields = [
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

