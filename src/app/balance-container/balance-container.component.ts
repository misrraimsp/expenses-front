import { Component, OnInit } from '@angular/core';
import {Person} from '../model/person';
import {BalanceService} from '../service/balance.service';

@Component({
  selector: 'app-balance-container',
  templateUrl: './balance-container.component.html',
  styleUrls: ['./balance-container.component.css']
})
export class BalanceContainerComponent implements OnInit {

  public balances: Person[];

  constructor(private server: BalanceService) { }

  ngOnInit(): void {
    this.server.getAll()
      .subscribe((response: Person[]) => {
        this.balances = response;
      });
  }

}
