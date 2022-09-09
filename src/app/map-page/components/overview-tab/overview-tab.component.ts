import { Component, Input } from '@angular/core';
import { Marker } from '@app/data';

@Component({
    selector: 'app-overview-tab',
    templateUrl: './overview-tab.component.html',
    styleUrls: ['./overview-tab.component.scss']
})
export class OverviewTabComponent { 

    @Input()
    marker?: Marker
    
}
