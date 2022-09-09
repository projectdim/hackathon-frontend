import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@app/core/core.module';
import { AppInitializerProvider } from '@app/core/providers';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        NgbModule,
        //App routing (should be imported as the last one)
        AppRoutingModule,
    ],
    providers: [
        AppInitializerProvider,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
