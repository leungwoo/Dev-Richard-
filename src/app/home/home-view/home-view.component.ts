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

  hobbies = [
    { title: 'Table Tennis', hobbyImage: 'assets/tabletennis.jpeg' },
    { title: 'Tennis', hobbyImage: 'assets/tennis.jpeg' },
    { title: 'Gym', hobbyImage: 'assets/squat.jpg' },
    { title: 'VolleyBall', hobbyImage: 'assets/volleyball.jpeg' },
    { title: 'Travel', hobbyImage: 'assets/China camel.JPG' },
    { title: 'Track and Field', hobbyImage: 'assets/track1.JPG' },
  ];

  cardImages = [
    {
      year: '2009-2013',
      title: 'Quarry Management Officer',
      image: 'assets/Ministry.JPG',
      details:
        ' My first job straight out of College, managing the Quarry operations of Trinidad and Tobago.',
      url: 'https://www.energy.gov.tt/minerals/',
    },
    {
      year: '2012-2018',
      title: 'Network Marketing',
      image: 'assets/OG.JPG',
      details:
        'Built teams of distributors in the commodity industry and forex industry that generate $100s of millions of sales annually.',
      url: 'https://www.organogold.com/en/',
    },
    {
      year: '2018-2022',
      title: 'Personal Trainer',
      image: 'assets/Richardphoto.JPEG',
      details:
        'Personal Training people to get into the best health and physique as possible.',
    },
    {
      year: '2019-2022',
      title: 'Sunglasses Business',
      image: 'assets/rayban.jpg',
      details: 'Retail Business selling Rayban sunglasses to the Caribbean.',
      url: 'https://www.facebook.com/shopsplurgett',
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
