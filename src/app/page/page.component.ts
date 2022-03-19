import { Component, OnInit } from '@angular/core';
import { Home, Level } from '../Level';
import { ContentService } from '../shared/services/content.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  public page: Level;

  constructor(private contentService: ContentService) {
    this.page = this.contentService.pages['home'];
  }

  ngOnInit() {}
}
