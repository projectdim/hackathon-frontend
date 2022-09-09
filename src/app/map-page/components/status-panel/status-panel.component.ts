import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Marker } from '@app/data';

@Component({
    selector: 'app-status-panel',
    templateUrl: './status-panel.component.html',
    styleUrls: ['./status-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusPanelComponent {

    active: number = 0;

    @Input()
    selectedMarker?: Marker;

    constructor(public route: ActivatedRoute) { }

}
