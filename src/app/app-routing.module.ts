import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapPageComponent } from '@app/map-page/map-page.component';

const routes: Routes = [
    { path: 'map', component: MapPageComponent },
    { path: '**', component: MapPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor(
        @Optional() @SkipSelf() parentModule: AppRoutingModule,
    ) {
        if (parentModule) {
            throw new Error(`${AppRoutingModule.name} is already loaded. Import it in the main AppModule only.`);
        }
    }
}
