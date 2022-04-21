import { Injectable } from '@angular/core';
import { CryptoNews } from 'src/app/news/interfaces/crypto';
import { TechnologyNews } from 'src/app/news/interfaces/Tech';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private _http: HttpClient) {}
  public apiCryptoUrl =
    'https://newsapi.org/v2/everything?q=bitcoin&apiKey=bdf406765a374ca3b3c9c88aaf097343';

  public apiTechUrl =
    'https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=bdf406765a374ca3b3c9c88aaf097343';

  public getCryptoNews(): Observable<CryptoNews> {
    return this._http.get<CryptoNews>(this.apiCryptoUrl);
  }

  public getTechNews(): Observable<TechnologyNews> {
    return this._http.get<TechnologyNews>(this.apiTechUrl);
  }
}
