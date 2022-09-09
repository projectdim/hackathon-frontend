import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GeolocationService} from '@ng-web-apis/geolocation';
import {Subject, takeUntil} from 'rxjs';
import {GoogleMap} from '@angular/google-maps';
import {googleMapOptions} from '@app/map-page/map/google-map.config';
import MapOptions = google.maps.MapOptions;

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {

    @ViewChild(GoogleMap, {static: true})
    googleMap!: GoogleMap

    options: MapOptions = googleMapOptions;

    onDestroy = new Subject<void>();

    // TODO : better solution
    isWaiting = true;

    constructor(private geolocation: GeolocationService) {
        this.initLocation();
    }

    private initLocation() {
        this.geolocation.pipe(takeUntil(this.onDestroy)).subscribe(geo => {
            this.isWaiting = false;
            this.googleMap.panTo({lat: geo.coords.latitude, lng: geo.coords.longitude});
        });
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.onDestroy.next();
        this.onDestroy.complete();
    }

}
