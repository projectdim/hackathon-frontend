import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Pin} from '@app/data';
import {mockPins} from '@app/map-page/services/mock-markers';

@Injectable({
    providedIn: 'root'
})
export class MarkerService {

    constructor() {
    }

    get(): Observable<Array<Pin>> {
        return new Observable<Array<Pin>>((obs) => {
            obs.next(mockPins);
            obs.complete();
        })
    }

}
