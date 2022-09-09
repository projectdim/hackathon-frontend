import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Photo} from '@app/data';
import {PhotosModalComponent} from '@app/map-page/components/photos-widget/photos-modal/photos-modal.component';

@Component({
  selector: 'app-photos-widget',
  templateUrl: './photos-widget.component.html',
  styleUrls: ['./photos-widget.component.scss']
})
export class PhotosWidgetComponent implements OnInit {

  @Input()
  photos?:Array<Photo> = [];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  showPhotoModal(photo: Photo) {
    const modal = this.modalService.open(PhotosModalComponent);
    modal.componentInstance.photo = photo;
  }
}
