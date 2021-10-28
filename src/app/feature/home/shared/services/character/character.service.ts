import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@core/modelo/http.model';
import { ValidService } from '@core/services/valid.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient,
    private valid: ValidService
  ) { }

  get(): Observable<Http> {
    let hash = this.valid.generateHash();
    const params = new HttpParams()
        .set('ts', environment.ts)
        .set('apikey', environment.publicKey)
        .set('hash', hash)
        // .set('limit', limit)
    return this.http.get<Http>(`${environment.api}v1/public/characters`, {params})
  }
}
