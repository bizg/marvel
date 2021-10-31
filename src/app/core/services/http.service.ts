import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@core/modelo/http.model';
import { environment } from 'src/environments/environment';
import { ValidService } from './valid.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  hash = this.valid.generateHash();

  constructor(
    private http: HttpClient,
    private valid: ValidService,
  ) {}

  createDefaultOptions() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: {
        'ts': environment.ts,
        'apikey': environment.publicKey,
        'hash': this.hash
      }
    };
  }

  doGet(url: string, options?: any){
    let config = this.createDefaultOptions();
    let opts = options != null ? {
      headers: config.headers,
      params: {
        ...config.params,
        ...options.params,
      }
    } : config;
    return this.http.get<Http>(url, opts);
  }


}
