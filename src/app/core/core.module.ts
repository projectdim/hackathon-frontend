import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from './components';
import { FooterComponent } from './components';
import { StatusItemComponent } from './components/status-item/status-item.component';
import { StatusListComponent } from './components/status-list/status-list.component';

@NgModule({
    imports: [
        SharedModule,
        TranslateModule
    ],
    declarations: [
      NavbarComponent,
      FooterComponent,
      StatusItemComponent,
      StatusListComponent
    ],
    exports:[
        NavbarComponent,
        FooterComponent,
        StatusItemComponent,
        StatusListComponent
    ]
})
export class CoreModule {
    constructor(
        @Optional() @SkipSelf() parentModule: CoreModule,
    ) {
        if (parentModule) {
            throw new Error(`${CoreModule.name} is already loaded. Import it in the main AppModule only.`);
        }
    }
}
