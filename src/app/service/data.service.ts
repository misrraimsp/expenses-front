import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class  DataService {

  private BASE_URL = 'http://localhost:8080';

  constructor(private resourceUrl: string, private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.BASE_URL + this.resourceUrl);
  }

  create(resource): Observable<any> {
    return this.http.post(this.BASE_URL + this.resourceUrl, resource);
  }
}
