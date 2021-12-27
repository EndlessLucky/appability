import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    user: User;

    ngOnInit() : void {
        this.user = new User();
        this.user.id = 5;
        this.user.username = 'Username';
        this.user.firstName = 'firstname';
        this.user.lastName = 'lastname';
        this.user.email = 'email@example.com';
    }

}
