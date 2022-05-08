import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectHomeComponent implements OnInit {
  public projectWork = [
    {
      title: 'Bakery',
      url: 'https://caribbean-delights.vercel.app/home',
      image: '/assets/CaribbeanDelight.png',
    },
    {
      title: 'Credit Card Builder',
      url: 'https://credit-card-project.vercel.app/',
      image: '/assets/CreditCard.jpeg',
    },
    {
      title: 'API News Website ',
      url: 'https://github.com/leungwoo/newswebsite.git',
      image: '/assets/News.jpeg',
    },
    {
      title: 'Fitness App Coming Soon',
      url: '',
      image: '/assets/desktop.jpeg',
    },
  ];

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private route: Router
  ) {}
  goHome() {
    this.route.navigate(['./']); // navigate to home
  }

  ngOnInit(): void {
    this._document.body.classList.add('bodybg-image2');
  }
  ngOnDestroy() {
    // remove the class form body tag
    this._document.body.classList.remove('bodybg-image2');
  }
}
