import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos-widget',
  templateUrl: './photos-widget.component.html',
  styleUrls: ['./photos-widget.component.scss']
})
export class PhotosWidgetComponent implements OnInit {

  photos:Array<any> = [].constructor(10)


  constructor() { }

  ngOnInit(): void {
  }

}
