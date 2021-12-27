import { Component, OnInit } from '@angular/core';
import { DataViewComponent } from '../../../../shared/grid/components/data-view/data-view.component';

@Component({
    selector: 'app-pay-rate-view',
    templateUrl: '../../../../shared/grid/components/data-view/data-view.component.html',
    styleUrls: ['../../../../shared/grid/components/data-view/data-view.component.scss']
})
export class ViewComponent extends DataViewComponent implements OnInit {
    // title = 'Your custom here';
    apiName = 'pay-rate';

    displayedFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'rateName',                // for column: "Rate Name"
        'projectRate',                // for column: "Project Rate"
        'clientRate0',                // for column: "Client Rate 0"
        'clientRate8',                // for column: "Client Rate 8"
        'clientRate16',                // for column: "Client Rate 16"
        'clientRate24',                // for column: "Client Rate 24"
        'helpLoading',                // for column: "Help loading"
    ];
}

