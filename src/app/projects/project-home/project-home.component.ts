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
