import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Marker} from '@app/data';

@Component({
  selector: 'app-status-panel',
  templateUrl: './status-panel.component.html',
  styleUrls: ['./status-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusPanelComponent {

  @Input()
  marker?: Marker

}
