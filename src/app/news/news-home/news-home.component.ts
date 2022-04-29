import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NewsHomeComponent implements OnInit, OnDestroy {
  constructor(@Inject(DOCUMENT) private _document: Document) {}

  ngOnInit(): void {
    this._document.body.classList.add('bodybg-image3');
  }
  ngOnDestroy(): void {
    this._document.body.classList.remove('bodybg-image3');
  }
}
