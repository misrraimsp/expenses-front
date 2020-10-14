import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseContainerComponent } from './expense-container.component';
import {from} from 'rxjs';
import {Expense} from '../model/expense';
import {ExpenseService} from '../service/expense.service';
import {Router} from '@angular/router';
import empty = jasmine.empty;

xdescribe('ExpenseComponent', () => {
  let component: ExpenseContainerComponent;
  let fixture: ComponentFixture<ExpenseContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('UNIT-ExpenseContainerComponent', () => {

  class FakeRouter {
    navigate(input: string[]): void {
      return;
    }
  }

  let component: ExpenseContainerComponent;
  let server: ExpenseService;
  let router: FakeRouter;
  let expenses: Expense[];

  beforeEach(() => {
    server = new ExpenseService(null);
    router = new FakeRouter();
    component = new ExpenseContainerComponent(server, router as unknown as Router);
    expenses = [
      new Expense(1, 1, 'testExp'),
      new Expense(2, 2, 'testExp2')
    ];
  });

  it('should set expenses property with the items returned from the server', () => {
    spyOn(server, 'getAll').and.callFake(() => from([expenses]));

    component.ngOnInit();

    expect(component.expenses).toEqual(expenses);
  });

  it('should call router \'navigate\' method on addFriend', () => {
    const spy = spyOn(router, 'navigate').and.callFake(x => empty());

    component.onAddFriend();

    expect(spy).toHaveBeenCalledWith(['/addfriend']);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should call router \'navigate\' method on addExpense', () => {
    const spy = spyOn(router, 'navigate').and.callFake(x => empty());

    component.onAddExpense();

    expect(spy).toHaveBeenCalledWith(['/addexpense']);
    expect(spy).toHaveBeenCalledTimes(1);
  });

});
