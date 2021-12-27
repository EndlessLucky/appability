import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { RestApiDataSource } from '../../../../shared/grid/data-sources/rest-api.data-source';
import { RestApiService } from '../../../../shared/grid/services/rest-api.service';
import { DataService } from '../../../data/services/data.service';
import { UserDataSource } from '../../data-sources/user.data-source';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    user: Observable<UserModel>;

    constructor(private authenticationService: AuthenticationService, private dataService: RestApiService, private route: Router) {}

    ngOnInit() {
        if (this.authenticationService.currentUserValue) {
            this.user = this.dataService.findOne(this.authenticationService.currentUserValue.id).pipe();
        }
    }

}
