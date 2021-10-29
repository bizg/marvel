import { Injectable } from '@angular/core';
import { Http } from '@core/modelo/http.model';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor(
    private http: HttpService,
  ) { }

  getRandom(dateRange:string,limit = 3): Observable<Http> {
    let params = {
      'limit': limit,
      'dateRange': dateRange
    };
    return this.http.doGet(`${environment.api}v1/public/comics`,{params})
  }


}
