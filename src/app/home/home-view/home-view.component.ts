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

  cardImages = [
    // {
    //   year: '2006-2015',
    //   title: 'Track Life',
    //   image: 'assets/track1.JPG',
    //   details: 'started from a young age',
    // },
    {
      year: '2009-2013',
      title: 'Quarry Management Officer',
      image: 'assets/Ministry.JPG',
      details:
        'First job out of College, Manageing the Quarry operations of Trinidad and Tobago',
    },
    {
      year: '2012-2018',
      title: 'Network Marketing',
      image: 'assets/OG.JPG',
      details: 'started from a young age',
    },
    {
      year: '2019-2022',
      title: 'Sunglasses Retail Business',
      image: 'assets/rayban.jpg',
      details: 'Retail Business selling Rayban sunglasses to the Caribbean',
    },
    // {
    //   title: 'Web Developer',
    //   image: 'assets/laptop.jpeg',
    //   details:
    //     'Freelancer Web developer using HTML5, CSS, Flexbox, Angular framework',
    // },
  ];
  ngOnInit(): void {
    this._document.body.classList.add('bodybg-image');
  }
  ngOnDestroy() {
    // remove the class form body tag
    this._document.body.classList.remove('bodybg-image');
  }
}
