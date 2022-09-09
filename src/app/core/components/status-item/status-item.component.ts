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

@Component({
  selector: "app-status-item",
  templateUrl: "./status-item.component.html",
  styleUrls: ["./status-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusItemComponent implements OnInit {
  constructor() {}

  status: ItemStatus = {
    id: "whatever",
    type: "road",
    statusKey: "stable",
    safetyLevel: true,
    distance: "whatever",
    modifiedDate: "2022-09-09T16:38:20.777994",
    // "description":""
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.",
  };

  get iconClass(): string {
    switch (this.status.type) {
      case "building":
        return "fa-home";
      case "electricity":
        return "fa-bolt";
      case "road":
        return "fa-road";
      case "water":
        return "fa-droplet";
      case "petrol":
        return "fa-gas-pump";
      case "medical":
        return "fa-suitcase-medical";
    }
    return "";
  }
  get statusColor(): string {
   return this.status.safetyLevel === true ? "positive" : "negative";
  }

  ngOnInit(): void {}
}
