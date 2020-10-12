import {Component, OnInit} from '@angular/core';
import {Expense} from './model/expense';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'first-spa';
  private url = 'http://localhost:8080/expenses';

  public newExp: Expense;

  public expenses: Expense[];

  constructor(private http: HttpClient) {}

  doPost(): void {
    this.newExp = new Expense(9.99, 3, 'Testing Post');
    this.http.post(this.url, this.newExp).subscribe((response: Expense) => {
      console.log(response);
      this.expenses.unshift(response);
    });
  }
}
