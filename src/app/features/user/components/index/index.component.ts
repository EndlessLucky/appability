import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { UserDataSource } from '../../data-sources/user.data-source';

@Component({
    selector: 'app-user-index',
  templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
  styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Users';

    displayedColumns = [
        'select',
        'id',
        'role',
        'username',
        'email',
        // 'name',
        // 'surname',
        'actions'
    ];

    ngOnInit() {
        this.dataSource = new UserDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
