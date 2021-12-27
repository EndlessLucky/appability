import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { HazardDataSource } from '../../data-sources/hazard.data-source';

@Component({
    selector: 'app-hazard-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Hazard list';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'hazardLabel',                // for column: "Hazard Label"
        'hazardType',                // for column: "Hazard Type"
        'hazardDescription',                // for column: "Hazard Description"
        'image',                // for column: "Image"

        'actions'
    ];

    ngOnInit() {
        this.dataSource = new HazardDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
