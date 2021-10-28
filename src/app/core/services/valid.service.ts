import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { md5 as MD5 } from '@dikman/md5';

@Injectable({
  providedIn: 'root'
})
export class ValidService {

  constructor() { }

  generateHash() {
    let md5 = MD5(`${environment.ts}${environment.privateKey}${environment.publicKey}`);
    return md5;
  }
}
