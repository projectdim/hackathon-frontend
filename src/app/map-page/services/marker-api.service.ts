import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map, Observable} from 'rxjs';
import {Pin} from '@app/data';

export interface ApiMarker {
    "id": string,
    "lat": number,
    "lng": number
}

@Injectable({
    providedIn: 'root'
})
export class MarkerApiService {

    constructor(private http: HttpClient) {
    }

    markers(): Observable<Array<Pin>> {
        return this.http.get<Array<ApiMarker>>(`${environment.backendUrl}/markers`).pipe(map(apiMarkers => {
            return apiMarkers.map(apiMarker => {
                return {
                    lat: apiMarker.lat,
                    lng: apiMarker.lng,
                    id: apiMarker.id
                }
            })
        }));
    }


}
