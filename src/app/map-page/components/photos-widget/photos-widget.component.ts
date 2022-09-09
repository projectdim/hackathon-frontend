import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-photos-widget',
  templateUrl: './photos-widget.component.html',
  styleUrls: ['./photos-widget.component.scss']
})
export class PhotosWidgetComponent implements OnInit {

  @Input()
  photos?:Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
