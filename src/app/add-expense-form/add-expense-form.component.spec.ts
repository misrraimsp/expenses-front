import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpenseFormComponent } from './add-expense-form.component';
import {BalanceService} from '../service/balance.service';
import {FormBuilder, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {from} from 'rxjs';
import {ExpenseService} from '../service/expense.service';
import empty = jasmine.empty;
import {Person} from '../model/person';

xdescribe('AddExpenseFormComponent', () => {
  let component: AddExpenseFormComponent;
  let fixture: ComponentFixture<AddExpenseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExpenseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('UNIT-AddExpenseFormComponent', () => {

  class FakeRouter {
    navigate(input: string[]): void {
      return;
    }
  }

  let component: AddExpenseFormComponent;
  let balanceServer: BalanceService;
  let expenseServer: ExpenseService;
  let router: FakeRouter;
  const people = [
    new Person('someguy', 'thesameguy'),
    new Person('otherguy', 'thesameotherguy')
  ];

  beforeEach(() => {
    balanceServer = new BalanceService(null);
    expenseServer = new ExpenseService(null);
    router = new FakeRouter();
    component = new AddExpenseFormComponent(new FormBuilder(), balanceServer, expenseServer, router as unknown as Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.form).toBeTruthy();
  });

  it('should create a form with 3 controls', () => {
    expect(component.form.contains('amount')).toBeTruthy();
    expect(component.form.contains('payerId')).toBeTruthy();
    expect(component.form.contains('description')).toBeTruthy();
  });

  it('should make \'amount\' required', () => {
    const control = component.form.get('amount');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });

  it('should make \'payerId\' required', () => {
    const control = component.form.get('payerId');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });

  it('should make \'description\' optional', () => {
    const control = component.form.get('description');

    control.setValue('');

    expect(control.valid).toBeTruthy();
  });

  it('should call expenseServer \'create\' method on submit', () => {
    const spy = spyOn(expenseServer, 'create').and.callFake(b => from([b]));

    component.onSubmit();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should call router \'navigate\' method on submit', () => {
    spyOn(expenseServer, 'create').and.callFake(b => from([b]));
    const spyRouter = spyOn(router, 'navigate').and.callFake(x => empty());

    component.onSubmit();

    expect(spyRouter).toHaveBeenCalledWith(['/']);
    expect(spyRouter).toHaveBeenCalledTimes(1);
  });

  it('should set people property with the items returned from the server', () => {
    spyOn(balanceServer, 'getAll').and.callFake(() => from([people]));

    component.ngOnInit();

    expect(component.people).toBe(people);
  });

  it('should return \'description\' formControl when call for it', () => {
    const expectedControl = component.form.get('description') as FormControl;

    const actualControl = component.description;

    expect(actualControl).toBe(expectedControl);
  });

  it('should return \'amount\' formControl when call for it', () => {
    const expectedControl = component.form.get('amount') as FormControl;

    const actualControl = component.amount;

    expect(actualControl).toBe(expectedControl);
  });

  it('should return \'payerId\' formControl when call for it', () => {
    const expectedControl = component.form.get('payerId') as FormControl;

    const actualControl = component.payerId;

    expect(actualControl).toBe(expectedControl);
  });

});
