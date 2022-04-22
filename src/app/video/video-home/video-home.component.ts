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

  public videos = [
    {
      title: 'Pool Project',
      video: 'AokRmam2f1U',
      details: 'Built an in ground pool for florida resident.',
    },
    {
      title: '1st sub 11 in Tobago',
      video: '-Nj3YFrxRDs',
      details: 'Ran sub 11 in 100m twice in my career.',
    },
    {
      title: 'Squat PR 465lbs',
      video: '9yxoAeAjcOs',
      details:
        'Took one year of training to move from 315lbs to 465lbs squat PR at 170lbs body weight.',
    },
    {
      title: 'Volleyball in Texas',
      video: 'mgFBcb57Mw8',
      details:
        'Volleyball in sand is a different sport! You must try it someday.',
    },
    {
      title: 'My daughter abdominal workout',
      video: 'zAuR7osiJvc',
      details: 'Becoming elite is never by accident.',
    },
    {
      title: 'First 405lbs squat in back yard gym',
      video: '6TnzdyMRbBI',
      details: 'Daily consistent goal setting moment euphoria',
    },
  ];

  ngOnInit(): void {
    this._document.body.classList.add('bodybg-image1');
  }
  ngOnDestroy() {
    // remove the class form body tag
    this._document.body.classList.remove('bodybg-image1');
  }
}
