import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class  DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  create(resource): Observable<any> {
    return this.http.post(this.url, resource);
  }
}
