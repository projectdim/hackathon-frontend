import {Component, OnInit, ViewChild} from '@angular/core';
import {Marker, Pin} from '@app/data';
import {MarkerService} from '@app/map-page/services/marker.service';
import {MapComponent} from '@app/map-page/components';

@Component({
    selector: 'app-map-page',
    templateUrl: './map-page.component.html',
    styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {

    selectedPin?: Pin;
    pins: Array<Pin> = [];

    selectedMarker?: Marker;

    @ViewChild(MapComponent, {static: true})
    mapComponent!: MapComponent

    constructor(private markerService: MarkerService) {
    }

    ngOnInit() {
        this.markerService.getPins().subscribe(pins => {
            this.pins = pins;
            this.mapComponent.panMap(pins[0])
        });
    }

    handlePin(pin: Pin) {
        console.dir(pin);
        this.selectedPin = pin;
        this.markerService.getMarker(pin.id).subscribe(marker =>{
            console.dir(marker);
            this.selectedMarker = marker;
        })
    }
}
