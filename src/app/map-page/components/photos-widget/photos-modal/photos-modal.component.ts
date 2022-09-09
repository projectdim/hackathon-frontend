import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '@app/data';

@Component({
  selector: 'app-photos-modal',
  templateUrl: './photos-modal.component.html',
  styleUrls: ['./photos-modal.component.scss']
})
export class PhotosModalComponent implements OnInit {

  @Input()
  photo?:Photo

  constructor() { }

  ngOnInit(): void {
  }

}
