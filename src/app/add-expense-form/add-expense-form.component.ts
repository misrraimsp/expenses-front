import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BalanceService} from '../service/balance.service';
import {Person} from '../model/person';
import {ExpenseService} from '../service/expense.service';
import {Expense} from '../model/expense';

@Component({
  selector: 'app-add-expense-form',
  templateUrl: './add-expense-form.component.html',
  styleUrls: ['./add-expense-form.component.css']
})
export class AddExpenseFormComponent implements OnInit {

  form: FormGroup;
  public people: Person[];

  constructor(fb: FormBuilder, private balanceServer: BalanceService, private expenseServer: ExpenseService ) {
    this.form = fb.group({
      amount: ['', Validators.required],
      payerId: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.balanceServer.getAll().subscribe((response: Person[]) => {
      this.people = response;
      console.log(this.people);
    });
  }

  get amount(): FormControl{ return this.form.get('amount') as FormControl; }
  get payerId(): FormControl{ return this.form.get('payerId') as FormControl; }
  get description(): FormControl{ return this.form.get('description') as FormControl; }

  submit(): void {
    console.log(new Expense(this.amount.value, this.payerId.value, this.description.value));
    this.expenseServer.create(new Expense(this.amount.value, this.payerId.value, this.description.value)).subscribe((response: Person) => {
      console.log(response);
      // this.expenses.unshift(response);
    });
  }

}
