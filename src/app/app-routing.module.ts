import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BalanceComponent} from './balance/balance.component';
import {TransferComponent} from './transfer/transfer.component';
import {ExpenseContainerComponent} from './expense-container/expense-container.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'expenses', component: ExpenseContainerComponent},
  { path: 'balance', component: BalanceComponent},
  { path: 'transfers', component: TransferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
