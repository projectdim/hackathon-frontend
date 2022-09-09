import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DefaultLocales, defaultLocales } from '@app/locale';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

    defaultLocales: DefaultLocales = defaultLocales;
    selectedLanguage: string = 'en';

    constructor(private translate: TranslateService) { }

    changeLanguage(code: string): void {
        this.translate.use(code);
        this.selectedLanguage = code;
    }

}
