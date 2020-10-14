import { Component, Input } from '@angular/core';
import { Person } from '../model/person';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent {
  @Input() public balanceInfo: Person;
}
