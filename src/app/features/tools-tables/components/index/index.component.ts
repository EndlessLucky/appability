import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToolsTableInfoService } from '../../services/tools-table-info.service';
import { ToolsTablesService } from '../../services/tools-tables.service';

@Component({
    selector: 'app-tools-tables-index',
    templateUrl: 'index.component.html',
    styleUrls: ['index.component.scss']
})
export class IndexComponent implements OnInit {

    table$: Observable<any>;

    tableInfo$: Observable<any>;

    sampleRow$: Observable<any>;

    constructor(private tableService: ToolsTablesService, private infoService: ToolsTableInfoService) {
    }

    ngOnInit() {
        this.load();
    }

    load() {
        this.table$ = this.tableService.find();
    }

    updateInfo($event) {
        this.tableInfo$ = this.infoService.findOne($event).pipe(
            tap(data => {
                this.loadSampleRow(data.api, data.randomId);
            })
        );
    }

    loadSampleRow(api, id) {
        this.sampleRow$ = this.tableService.findOne(api, id);
    }
}
