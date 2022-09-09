import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from './components';

@NgModule({
    imports: [
        SharedModule,
        TranslateModule
    ],
    declarations: [
        NavbarComponent
    ],
    exports:[
        NavbarComponent,
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
