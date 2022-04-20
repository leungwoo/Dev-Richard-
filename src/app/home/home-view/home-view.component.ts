import {
  Component,
  OnInit,
  OnDestroy,
  ViewEncapsulation,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeViewComponent implements OnInit, OnDestroy {
  constructor(@Inject(DOCUMENT) private _document: Document) {}

  ngOnInit(): void {
    this._document.body.classList.add('bodybg-image');
  }
  ngOnDestroy() {
    // remove the class form body tag
    this._document.body.classList.remove('bodybg-image');
  }
}
