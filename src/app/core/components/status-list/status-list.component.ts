import {ChangeDetectionStrategy, Component, Input, OnInit} from "@angular/core";
import {Status} from '@app/data';
interface ItemStatus {
  id: string;
  type: string;
  statusKey: string;
  safetyLevel: boolean;
  distance: string;
  modifiedDate: string;
  description: string;
}

@Component({
  selector: "app-status-list",
  templateUrl: "./status-list.component.html",
  styleUrls: ["./status-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusListComponent implements OnInit {
  constructor() {}

  @Input()
  statuses?: Array<Status> = [
    {
      id: "123",
      type: "building",
      statusKey: "intact",
      safetyLevel: true,
      distance: "",
      modifiedDate: "2022-09-09T16:38:20.777994",
      // "description":""
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.",
    },
    {
      id: "314324",
      type: "electricity",
      statusKey: "stable",
      safetyLevel: true,
      distance: "",
      modifiedDate: "2022-09-09T16:38:20.777994",
      description:""
    },
    {
      id: "whatever",
      type: "road",
      statusKey: "stable",
      safetyLevel: true,
      distance: "",
      modifiedDate: "2022-09-09T16:38:20.777994",
      // "description":""
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.",
    },
    {
      id: "536534",
      type: "water",
      statusKey: "unstable",
      safetyLevel: false,
      distance: "",
      modifiedDate: "2022-09-09T16:38:20.777994",
      // "description":""
      description:
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu felis nec, scelerisque pharetra turpis."
    },
    {
      id: "5456524",
      type: "petrol",
      statusKey: "closed",
      safetyLevel: false,
      distance: "0.8km",
      modifiedDate: "2022-09-09T16:38:20.777994",
      description:""
    },
    {
      id: "5456524",
      type: "medical",
      statusKey: "open",
      safetyLevel: true,
      distance: "1.2km",
      modifiedDate: "2022-09-09T16:38:20.777994",
      description:""
    },



  ];

  ngOnInit(): void {}
}
