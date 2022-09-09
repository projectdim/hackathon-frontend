import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Marker, Pin} from '@app/data';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MarkerService {

    constructor(private http: HttpClient) {
    }

    getPins(): Observable<Array<Pin>> {
        return this.http.get<Array<Pin>>(`${environment.backendUrl}/markers`);
    }

    getMarker(id: string): Observable<Marker> {
        return this.http.get<Marker>(`${environment.backendUrl}/markers/${id}`);
    }

}
