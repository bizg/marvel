import { Injectable } from '@angular/core';
import { Http } from '@core/modelo/http.model';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpService,
  ) { }

  get(): Observable<Http> {
    return this.http.doGet(`${environment.api}v1/public/characters`);
  }

  getOne(id: number): Observable<Http> {
    return this.http.doGet(`${environment.api}v1/public/characters/${id}`);
  }

}
