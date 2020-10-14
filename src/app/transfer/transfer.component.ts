import { Component, Input } from '@angular/core';
import { Transfer } from '../model/transfer';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  @Input() public transfer: Transfer;
}
