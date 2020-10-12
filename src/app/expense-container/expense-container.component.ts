import {Component, OnInit} from '@angular/core';
import { Expense } from '../model/expense';
import {ExpenseService} from '../service/expense.service';

@Component({
  selector: 'app-expense-container',
  templateUrl: './expense-container.component.html',
  styleUrls: ['./expense-container.component.css']
})
export class ExpenseContainerComponent implements OnInit{
  public expenses: Expense[];

  constructor(private server: ExpenseService) { }

  ngOnInit(): void {
    this.server.getAll()
      .subscribe((response: Expense[]) => {
        this.expenses = response;
    });
  }
}
