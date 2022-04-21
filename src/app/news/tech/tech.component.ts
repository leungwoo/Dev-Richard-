import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Article } from '../interfaces/Tech';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css'],
})
export class TechComponent implements OnInit {
  public techNews: Article[] = [];
  constructor(private apiserviceService: ApiserviceService) {}

  ngOnInit(): void {
    this.apiserviceService
      .getTechNews()
      .subscribe((techNews) => (this.techNews = techNews.articles));
  }
}
