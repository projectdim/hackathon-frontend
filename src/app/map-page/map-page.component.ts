import {Component, OnInit} from '@angular/core';
import {Pin} from '@app/data';
import {MarkerService} from '@app/map-page/services/marker.service';

@Component({
    selector: 'app-map-page',
    templateUrl: './map-page.component.html',
    styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {

    selectedPin?: Pin;
    pins: Array<Pin> = [];

    constructor(private markerService: MarkerService) {
    }

    ngOnInit() {
        this.markerService.get().subscribe(pins => {
            console.dir(pins);
            this.pins = pins;
        });
    }

    handlePin(pin: Pin) {
        this.selectedPin = pin;
    }
}
