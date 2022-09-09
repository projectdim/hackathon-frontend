import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@app/core/core.module';
import { AppInitializerProvider } from '@app/core/providers';
import { MapPageComponent } from './map-page/map-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapComponent } from './map-page/map/map.component';
import {GoogleMapsModule} from '@angular/google-maps';

@NgModule({
    declarations: [
        AppComponent,
        MapPageComponent,
        MapComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        NgbModule,
        //App routing (should be imported as the last one)
        AppRoutingModule,
        GoogleMapsModule,
    ],
    providers: [
        AppInitializerProvider,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
