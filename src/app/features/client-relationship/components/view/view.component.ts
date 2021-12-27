import { Component, OnInit } from '@angular/core';
import { DataViewComponent } from '../../../../shared/grid/components/data-view/data-view.component';

@Component({
    selector: 'app-client-relationship-view',
    templateUrl: '../../../../shared/grid/components/data-view/data-view.component.html',
    styleUrls: ['../../../../shared/grid/components/data-view/data-view.component.scss']
})
export class ViewComponent extends DataViewComponent implements OnInit {
    // title = 'Your custom here';
    apiName = 'client-relationship';

    displayedFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LAstModified"
        'lastmodifiedby',                // for column: "LAstModifiedBy"
        'relationship',                // for column: "Relationship"
        'active',                // for column: "ACtive"
    ];
}

