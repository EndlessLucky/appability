import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeOption } from '../../models/theme-option.model';
import { ThemeService } from '../../services/theme.service';


@Component({
    selector: 'app-profile',
    templateUrl: './preferences.component.html',
    styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
    options$: Observable<Array<ThemeOption>> = this.themeService.getThemeOptions();

    constructor(private readonly themeService: ThemeService) {}

    ngOnInit() {
        this.themeService.setTheme('deeppurple-amber');
    }

    themeChangeHandler(themeToSet) {
        this.themeService.setTheme(themeToSet);
    }

}
