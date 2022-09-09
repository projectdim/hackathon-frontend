import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-news-widget',
  templateUrl: './news-widget.component.html',
  styleUrls: ['./news-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsWidgetComponent { }
