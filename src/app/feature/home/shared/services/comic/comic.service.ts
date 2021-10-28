import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@core/modelo/http.model';
import { ValidService } from '@core/services/valid.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor(
    private http: HttpClient,
    private valid: ValidService
  ) { }

  getRandom(dateRange:string,limit = 3): Observable<Http> {
    let hash = this.valid.generateHash();
    const params = new HttpParams()
        .set('ts', environment.ts)
        .set('apikey', environment.publicKey)
        .set('hash', hash)
        .set('limit', limit)
        .set('dateRange', dateRange)
    return this.http.get<Http>(`${environment.api}v1/public/comics`,{params})
  }


}
