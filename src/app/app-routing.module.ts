import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ExpenseContainerComponent} from './expense-container/expense-container.component';
import {BalanceContainerComponent} from './balance-container/balance-container.component';
import {TransferContainerComponent} from './transfer-container/transfer-container.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'expenses', component: ExpenseContainerComponent},
  { path: 'balance', component: BalanceContainerComponent},
  { path: 'transfers', component: TransferContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
