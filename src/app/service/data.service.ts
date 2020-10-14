import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly BASE_URL = 'http://localhost:8080';
  private readonly url: string;

  constructor(private resourceUrl: string, private http: HttpClient) {
    this.url = this.BASE_URL + resourceUrl;
  }

  getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  create(resource): Observable<any> {
    return this.http.post(this.url, resource);
  }
}
