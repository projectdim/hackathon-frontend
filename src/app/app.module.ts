import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@app/core/core.module';
import { AppInitializerProvider } from '@app/core/providers';
import { MapPageComponent } from './map-page/map-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapComponent } from './map-page/components';
import { GoogleMapsModule } from '@angular/google-maps';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { translationConfig } from './translation.config';
import { HttpClientModule } from '@angular/common/http';
import { defaultLocales } from './locale';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { OverviewTabComponent } from './map-page/components/overview-tab/overview-tab.component';

@NgModule({
    declarations: [
        AppComponent,
        MapPageComponent,
        MapComponent,
        OverviewTabComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        SharedModule,
        NgbModule,
        HttpClientModule,
        TranslateModule.forRoot(translationConfig),
        GoogleMapsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        }),
        //App routing (should be imported as the last one)
        AppRoutingModule,
    ],
    providers: [
        AppInitializerProvider,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang(defaultLocales.preferredLanguage);
    }
}
