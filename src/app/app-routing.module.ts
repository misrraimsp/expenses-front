import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BalanceContainerComponent} from './balance-container/balance-container.component';
import {TransferContainerComponent} from './transfer-container/transfer-container.component';
import {AddFriendFormComponent} from './add-friend-form/add-friend-form.component';
import {AddExpenseFormComponent} from './add-expense-form/add-expense-form.component';
import {ExpenseContainerComponent} from './expense-container/expense-container.component';

const routes: Routes = [
  { path: '', component: ExpenseContainerComponent},
  { path: 'balance', component: BalanceContainerComponent},
  { path: 'transfers', component: TransferContainerComponent},
  { path: 'addfriend', component: AddFriendFormComponent},
  { path: 'addexpense', component: AddExpenseFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
