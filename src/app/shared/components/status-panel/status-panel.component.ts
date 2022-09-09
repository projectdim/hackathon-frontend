import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-status-panel',
  templateUrl: './status-panel.component.html',
  styleUrls: ['./status-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusPanelComponent { }
