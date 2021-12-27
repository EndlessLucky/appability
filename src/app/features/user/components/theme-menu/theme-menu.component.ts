import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemeOption } from '../../models/theme-option.model';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-theme-menu',
    templateUrl: './theme-menu.component.html',
    styleUrls: ['./theme-menu.component.scss']
})
export class ThemeMenuComponent {
    @Input() options: Array<ThemeOption>;
    @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

    themeName = this.getCurrentTheme();

    constructor(private themeService: ThemeService) {}

    changeTheme(themeToSet) {
        this.themeService.setTheme(themeToSet);
    }

    getCurrentTheme() {
        return 'indigo-pink';
    }

}
