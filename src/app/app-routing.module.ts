import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ExpenseContainerComponent} from './expense-container/expense-container.component';
import {BalanceContainerComponent} from './balance-container/balance-container.component';
import {TransferContainerComponent} from './transfer-container/transfer-container.component';
import {AddFriendFormComponent} from './add-friend-form/add-friend-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'expenses', component: ExpenseContainerComponent},
  { path: 'balance', component: BalanceContainerComponent},
  { path: 'transfers', component: TransferContainerComponent},
  { path: 'addfriend', component: AddFriendFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
