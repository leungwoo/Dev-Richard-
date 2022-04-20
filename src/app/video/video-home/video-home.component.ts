import {
  Component,
  OnInit,
  OnDestroy,
  ViewEncapsulation,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-video-home',
  templateUrl: './video-home.component.html',
  styleUrls: ['./video-home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class VideoHomeComponent implements OnInit, OnDestroy {
  constructor(@Inject(DOCUMENT) private _document: Document) {}
  ngOnInit(): void {
    this._document.body.classList.add('bodybg-image1');
  }
  ngOnDestroy() {
    // remove the class form body tag
    this._document.body.classList.remove('bodybg-image1');
  }
}
