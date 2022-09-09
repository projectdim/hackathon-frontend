import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Marker, Pin} from '@app/data';
import {MarkerApiService} from '@app/map-page/services/marker-api.service';

@Injectable({
    providedIn: 'root'
})
export class MarkerService {

    constructor(private api: MarkerApiService) {
    }

    getPins(): Observable<Array<Pin>> {
        return this.api.pins();
    }

    getMarker(id: string): Observable<Marker> {
        return new Observable<Marker>(obs => {
            obs.next({
                id: 'dummyMarker',
                address: {
                    city: 'dummy City',
                    zipcode: 'dummy Zipcode',
                    street: 'dummy Street'
                },
                photos: [],
                statuses: []
            });
            obs.complete();
        })
    }

}
