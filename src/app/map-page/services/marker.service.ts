import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Marker, Pin} from '@app/data';
import {MarkerApiService} from '@app/map-page/services/marker-api.service';
import {mockPins} from '@app/map-page/services/mock-markers';

@Injectable({
    providedIn: 'root'
})
export class MarkerService {

    constructor(private api: MarkerApiService) {
    }

    getPins(): Observable<Array<Pin>> {
        // return this.api.pins();
        return new Observable(obs => {
            setTimeout(() => {
                obs.next(mockPins);
                obs.complete();
            }, 100);
        });
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
                photos: [{
                    id: '1111',
                    label: 'dummy photo',
                    url: 'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
                },
                    {
                        url: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_02_thum-1.jpg',
                        id: '222',
                        label: 'dummy photo 2'
                    }],
                statuses: []
            });
            obs.complete();
        })
    }

}
