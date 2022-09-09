import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-request-section',
  templateUrl: './send-request-section.component.html',
  styleUrls: ['./send-request-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SendRequestSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
