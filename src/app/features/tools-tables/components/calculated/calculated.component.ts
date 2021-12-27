import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToolsCalculatedService } from '../../services/tools-calculated.service';
import { ToolsTableInfoService } from '../../services/tools-table-info.service';
import { ToolsTablesService } from '../../services/tools-tables.service';

@Component({
    selector: 'app-tools-tables-calculated',
    templateUrl: 'calculated.component.html',
    styleUrls: ['calculated.component.scss']
})
export class CalculatedComponent implements OnInit {

    table$: Observable<any>;

    tableInfo$: Observable<any>;

    sampleRow$: Observable<any>;
    form: any;

    constructor(private tableService: ToolsTablesService, protected fb: FormBuilder, protected calculatedService: ToolsCalculatedService) {
    }

    ngOnInit() {
        this.load();
        this.form = this.fb.group({
            table: [''],
            fields: [''],
        });
    }

    load() {
        this.table$ = this.tableService.find();
    }

    // updateInfo($event) {

    // }

    save() {
        console.log(this.form.value);
        const ret = this.calculatedService.save(this.form.value).subscribe();

        console.log(ret);
        return ret;
    }

    updateInfo(event) {
      // @todo implement or remove
    }
}
