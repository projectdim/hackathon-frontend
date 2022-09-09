import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Pin} from '@app/data';
import {MarkerApiService} from '@app/map-page/services/marker-api.service';

@Injectable({
    providedIn: 'root'
})
export class MarkerService {

    constructor(private api: MarkerApiService) {
    }

    get(): Observable<Array<Pin>> {
        return this.api.markers();
    }

}
