import { Component, OnInit } from '@angular/core';
import { DataViewComponent } from '../../../../shared/grid/components/data-view/data-view.component';

@Component({
    selector: 'app-adjective-view',
    templateUrl: '../../../../shared/grid/components/data-view/data-view.component.html',
    styleUrls: ['../../../../shared/grid/components/data-view/data-view.component.scss']
})
export class ViewComponent extends DataViewComponent implements OnInit {
    // title = 'Your custom here';
    apiName = 'adjective';

    displayedFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'adjective',                // for column: "Adjective"
    ];
}

