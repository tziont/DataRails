import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class WizardConfigEndpointService {

  constructor(private http: HttpClient) { }

  getWizardConfig():Observable<any>{
    return this.http.get('http://localhost:3000/wizard').pipe(map(reponse => reponse))
  }
}
