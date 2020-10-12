import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Expense} from '../model/expense';
import {Person} from '../model/person';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent {

  @Input() public expense: Expense;
  @Output() private addExp: EventEmitter<Expense>;

  constructor() {
    this.addExp = new EventEmitter<Expense>();
  }

  addExpense(): void {
    this.addExp.emit(this.expense);
  }
}
