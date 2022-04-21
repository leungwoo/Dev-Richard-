import { Injectable } from '@angular/core';
import { CryptoNews } from 'src/app/news/interfaces/crypto';
import { TechnologyNews } from 'src/app/news/interfaces/Tech';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  public apiCryptoUrl =
    'https://newsapi.org/v2/everything?q=bitcoin&apiKey=bdf406765a374ca3b3c9c88aaf097343';

  public apiTechUrl =
    'https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=bdf406765a374ca3b3c9c88aaf097343';

  constructor(private http: HttpClient) {}

  getCryptoNews(): Observable<CryptoNews> {
    return this.http.get<CryptoNews>(this.apiCryptoUrl);
  }

  getTechNews(): Observable<TechnologyNews> {
    return this.http.get<TechnologyNews>(this.apiTechUrl);
  }
}
