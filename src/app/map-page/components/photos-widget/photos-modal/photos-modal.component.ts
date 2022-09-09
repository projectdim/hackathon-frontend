import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '@app/data';
import {environment} from '../../../../../environments/environment';
import { getParsedUrl } from '../parse-photo-url';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-photos-modal',
  templateUrl: './photos-modal.component.html',
  styleUrls: ['./photos-modal.component.scss']
})
export class PhotosModalComponent implements OnInit {

  @Input()
  photo?:Photo

  getParsedUrl = getParsedUrl;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
