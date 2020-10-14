import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BalanceService extends DataService {

  constructor(http: HttpClient) {
    super('/people', http);
  }
}
