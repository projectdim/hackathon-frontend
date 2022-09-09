import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
interface ItemStatus {
  id: string;
  type: string;
  statusKey: string;
  safetyLevel: boolean;
  distance: string;
  modifiedDate: string;
  description: string;
}
interface Statuses extends Array<ItemStatus> {}

@Component({
  selector: "app-status-list",
  templateUrl: "./status-list.component.html",
  styleUrls: ["./status-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusListComponent implements OnInit {
  constructor() {}

  statuses: Statuses = [
    {
      id: "123",
      type: "building",
      statusKey: "intact",
      safetyLevel: true,
      distance: "whatever",
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
      distance: "whatever",
      modifiedDate: "2022-09-09T16:38:20.777994",
      description:""
    },
    {
      id: "whatever",
      type: "road",
      statusKey: "stable",
      safetyLevel: true,
      distance: "whatever",
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
      distance: "whatever",
      modifiedDate: "2022-09-09T16:38:20.777994",
      // "description":""
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.",
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