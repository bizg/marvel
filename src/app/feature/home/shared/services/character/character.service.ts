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

  get(offset?: number, sort?: string): Observable<Http> {
    let params: any = {
      limit: environment.limitCharacters,
      offset: offset || 0
    };
    if(sort != '' && sort) params.orderBy = sort;
    return this.http.doGet(`${environment.api}v1/public/characters`, {params});
  }

  getOne(id: number): Observable<Http> {
    return this.http.doGet(`${environment.api}v1/public/characters/${id}`);
  }

  getSortBy(sort: string, search?: string): Observable<Http> {
    let params: any = {
      orderBy: sort,
      limit: environment.limitCharacters
    };
    if(search != '' && search) params.name = search;
    return this.http.doGet(`${environment.api}v1/public/characters`, {params});
  }

  getSearch(name: string) {
    let params = {
      name: name
    };
    return this.http.doGet(`${environment.api}v1/public/characters`, {params});
  }

}
