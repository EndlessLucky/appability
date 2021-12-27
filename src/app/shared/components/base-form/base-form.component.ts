import { Location } from '@angular/common';
import { Component, Injector, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationStart, Router, RouterEvent } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { filter, first, last, map, tap } from 'rxjs/operators';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { FormStateService } from '../../../core/services/form-state.service';
import { StorageService } from '../../../core/services/storage.service';
import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { NotificationService } from '../../../core/services/notification.service';

export const LATEST_FORM_VALUES = 'latest-form-values';

@Component({
    selector: 'app-data-create',
    template: ''
})
export class BaseFormComponent implements OnInit, OnDestroy {

    subscriptions: Subscription = new Subscription();

    dialogTitle = '';

    fields = {};

    form: FormGroup;
    /**
     * leaving the route by clicking the Save button?
     */
    saving = false;

    /**
     * did we load any data from cache?
     */
    wasPrePopulatedFromCache = false;

    /**
     * did we load any data from API
     */
    wasPrePopulatedFromApi = false;

    /**
     * are we editing or creating new record?
     */
    isUpdate = false;

    /**
     * to use progress indicator
     */
    isLoading = true;

    /**
     * reload data from API, even if we have some data entered previously by the user
     */
    public forceUpdate = true;

    private role = null;

    constructor(protected fb: FormBuilder,
                protected activatedRoute: ActivatedRoute,
                protected service: RestApiService,
                protected location: Location,
                protected router: Router,
                protected formStateService: FormStateService,
                protected authenticationService: AuthenticationService,
                protected storageService: StorageService,
                protected notificationService : NotificationService,
                protected cdr : ChangeDetectorRef
                ) {}

    ngOnInit() {
        this.checkFieldsPermissions();

        // @todo Consider storing last visited URL here
        // Store the current form values only when navigating to bug report form
        this.subscriptions.add(
          this.router.events
            .pipe(
              first(),
              filter(event => event instanceof NavigationStart)
            )
            .subscribe((event: RouterEvent) => {
                  if (event.url === '/tools/feature-request') {
                    this.storeFormValues();
                  }
              })
        );

        this.form = this.fb.group(this.fields);
        this.activatedRoute.url.subscribe(url => {

            // load form values from form state service if any
            /**
             * @author seagull
             * @summary populate dialog title
             */
            this.subscriptions.add(this.activatedRoute.data.subscribe((data) => {
                if (data) {
                    this.dialogTitle = data.title ? data.title : this.dialogTitle;
                    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
                    if (idParam) {
                        this.dialogTitle = this.dialogTitle + ' #' + idParam;
                    }
                    if (data[0]) {
                        this.wasPrePopulatedFromCache = true;
                        for (const key of Object.keys(data[0])) {
                            if (this.form.controls[key]) {
                                this.form.controls[key].setValue(data[0][key]);
                            }
                        }

                    }

                }
            })
            );
        });

        /**
         * @author seagull
         * @summary this is for edit action, get data by id. string id to integer
         */
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.isUpdate = true;
            if (this.forceUpdate || !this.wasPrePopulatedFromCache) {
                this.subscriptions.add(this.service.findOne(id).subscribe(data => {
                    this.isLoading = false;
                    this.populate(data);
                },
                error => {
                    this.isLoading = false;
                    this.router.navigate(['/page-not-found']);
                }
                )
                );
            } else {
                this.isLoading = false;
            }
        } else {
            this.isLoading = false;
        }
    }

    /**
     * Remove form controls for which the current role is not allowed to access
     */
    public checkFieldsPermissions() {
        const role = this.getCurrentRole();
        for (const control of Object.keys(this.fields)) {
            if (this.activatedRoute.snapshot.data && this.activatedRoute.snapshot.data.access) {
                const action = this.activatedRoute.snapshot.routeConfig.path; // create, update, list etc
                const isAllowed = this.authenticationService.isAllowed(
                    this.activatedRoute.snapshot.data.access,
                    'form.' + control,
                    [action],
                    role);
                if (!isAllowed) {
                    // console.log('deleting ' + control);
                    delete this.fields[control];
                }
            }
        }
    }

    public getCurrentRole() {
        if (null === this.role) {
            this.role = this.authenticationService.getRole();
        }

        return this.role;
    }

    public populate(object) {
        Object.keys(this.fields).forEach(key => {
            // if (Object.prototype.hasOwnProperty.call(key)) {
            //     if(key != "image") this.form.patchValue({[key]: object[key]});
            // }
            if (object.hasOwnProperty(key) && object[key]) {
                this.form.patchValue({[key]: object[key]});
            }
        });
        this.wasPrePopulatedFromApi = true;
        // this.cdr.detectChanges();
    }

    saveButtonEnabled() {
        if (this.form.valid) {
            if (this.wasPrePopulatedFromCache && !this.wasPrePopulatedFromApi) {
                return true;
            }

            if (this.wasPrePopulatedFromApi) {
                return !this.form.pristine;
            }

            return !this.form.pristine;
        } else {
            return false;
        }
    }

    save() {
        if (this.form.valid) {
            let methodName = 'save';
            if (this.isUpdate) {
                methodName = 'update';
            }
            this.subscriptions.add(this.service[methodName](this.form.value).subscribe(data => {
                console.log('res', data);
                this.saving = true;
                this.notificationService.success('Data added');
                this.location.back();
            },
            error => {
                console.log(error);
                this.notificationService.error('Data added failed');
            }));
        } else {
            alert('form invalid');
        }
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    // this.form.reset(this.form.value);
    }

    getFormValues() {
        return this.formStateService.getBugValue();
    }

    storeFormValues() {
      this.storageService.setItem(LATEST_FORM_VALUES,
        {
          url: this.router.url,
          values: this.form.value
        });
    }

  /**
   * To be used in validators
   * Checks if the field values is unique
   *
   * @todo Handle case of empty field names - they are not unique, not allowed
   */
  isFieldValueUnique(fieldName, required = true): Observable<any> {
    const val = this.form.controls[fieldName].value;
    if (!val) {
      if (required) {
        // @todo
        // return false
      }
    }
    const obs = this.service.isUnique(fieldName, val);

    return obs;
  }

  goBack() {
    this.location.back();
  }
}
