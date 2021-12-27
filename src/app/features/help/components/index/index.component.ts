import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    // the commented code is to demonstrate Holdable directive

    title = environment.appName;

    // progress: number;
    // show = false;

    ngOnInit() {
    // this.progress = 0;
    }

    // delete(e) {
    //   this.progress = e / 10;
    //   console.log('%c ' + this.progress, 'color: red');
    //   if (this.progress === 110) {
    //     this.progress = 0;
    //     this.hideProgress();
    //     alert('deleting!');
    //   }
    // }

    // hideProgress() {
    //   this.show = false;
    //   this.progress = 0;
    // }
    //
    // showProgress() {
    //   this.progress = 0;
    //   this.show = true;
    // }
}
