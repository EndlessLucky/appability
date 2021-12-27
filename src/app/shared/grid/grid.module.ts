import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { NgxFilesizeModule } from 'ngx-filesize';
import { LocaleService } from '../../core/services/locale.service';
import { SharedModule } from '../shared.module';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { CodeSampleComponent } from './components/code-sample/code-sample.component';
import { DataAutocompleteComponent } from './components/data-autocomplete/data-autocomplete.component';
import { CoreFormComponent } from './components/core-form/core-form.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { DataMultiAutocompleteComponent } from './components/data-multi-autocomplete/data-multi-autocomplete.component';
import { DataViewComponent } from './components/data-view/data-view.component';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { GridSelectSearchComponent } from './components/grid-select-search/grid-select-search.component';
import { MatSelectSearchModule } from './components/mat-select-search/mat-select-seach.module';
import { FileUploadService } from './services/file-upload.service';

const importsExports = [
    CommonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatChipsModule,

    FormsModule,
    ReactiveFormsModule,

    MatAutocompleteModule,
    MatOptionModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSelectSearchModule,
    MatStepperModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatMenuModule,
    FlexLayoutModule,
];

@NgModule({
    declarations: [
        CoreFormComponent,
        DataGridComponent,
        DataViewComponent,
        DataAutocompleteComponent,
        DataMultiAutocompleteComponent,
        GridSelectSearchComponent,
        BackButtonComponent,
        FileUploadComponent,
        CodeSampleComponent
    ],
    imports: [
        importsExports,
        RouterModule,
        SharedModule,
        NgxFilesizeModule
    ],
    exports: [
        importsExports,
        DataAutocompleteComponent,
        DataMultiAutocompleteComponent,
        GridSelectSearchComponent,
        BackButtonComponent,
        FileUploadComponent,
        CodeSampleComponent
    ],
    providers: [
        {
            provide: MAT_DATE_LOCALE,
            useFactory: (localeService: LocaleService) => localeService.locale, deps: [LocaleService]
        },
        FileUploadService,
    ]
})
export class GridModule { }
