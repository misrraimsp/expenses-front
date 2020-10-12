import {Component, Input} from '@angular/core';
import {Expense} from '../model/expense';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent {
  @Input() public expense: Expense;
}
