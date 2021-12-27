import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestApiService } from '../../../../shared/grid/services/rest-api.service';
import { UserModel } from '../../models/user.model';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit, OnDestroy {

    user: Observable<UserModel>;

    id: number;
    private sub: any;

    constructor(private route: ActivatedRoute, private dataService: RestApiService) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params.id; // (+) converts string 'id' to a number

            this.user = this.dataService.findOne(this.id).pipe();
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
