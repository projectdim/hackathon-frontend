import {Component, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {GeolocationService} from '@ng-web-apis/geolocation';
import {Subject, takeUntil} from 'rxjs';
import {GoogleMap} from '@angular/google-maps';
import {googleMapOptions} from '@app/map-page/components/map/google-map.config';
import {Pin} from '@app/data';
import MapOptions = google.maps.MapOptions;
import MapMouseEvent = google.maps.MapMouseEvent;

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnDestroy {

    @ViewChild(GoogleMap, {static: true})
    googleMap!: GoogleMap

    options: MapOptions = googleMapOptions;

    onDestroy = new Subject<void>();

    // TODO : better solution
    isWaiting = true;

    @Input()
    pins: Array<Pin> = []

    @Output()
    pinSelected = new Subject<Pin>();

    constructor(private geolocation: GeolocationService) {
        this.initLocation();
    }

    private initLocation() {

        this.isWaiting = false;

        // this.geolocation.pipe(takeUntil(this.onDestroy)).subscribe(geo => {
        //     this.isWaiting = false;
        //     this.googleMap.panTo({lat: geo.coords.latitude, lng: geo.coords.longitude});
        // });
    }

    ngOnDestroy(): void {
        this.onDestroy.next();
        this.onDestroy.complete();
    }

    printLatLon(event: google.maps.MapMouseEvent | google.maps.IconMouseEvent) {
        console.dir(event.latLng?.lat());
        console.dir(event.latLng?.lng());
    }

    pinClicked(event: MapMouseEvent, pin: Pin) {
        this.pinSelected.next(pin);
    }
}
