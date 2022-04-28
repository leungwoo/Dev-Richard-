import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Article } from '../interfaces/crypto';
@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css'],
})
export class CryptoComponent implements OnInit {
  public cryptoNews: Article[] = [];

  constructor(private apiserviceService: ApiserviceService) {}

  ngOnInit(): void {
    this.apiserviceService
      .getCryptoNews()
      .subscribe((response) => (this.cryptoNews = response.articles));
  }
}
