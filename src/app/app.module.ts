import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseContainerComponent } from './expense-container/expense-container.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { BalanceComponent } from './balance/balance.component';
import { TransferComponent } from './transfer/transfer.component';
import { HomeComponent } from './home/home.component';
import { ExpenseComponent } from './expense/expense.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseContainerComponent,
    NavbarComponent,
    BalanceComponent,
    TransferComponent,
    HomeComponent,
    ExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
