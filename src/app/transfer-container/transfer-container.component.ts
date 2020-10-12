import { Component, OnInit } from '@angular/core';
import { TransferService } from '../service/transfer.service';
import { Transfer } from '../model/transfer';

@Component({
  selector: 'app-transfer-container',
  templateUrl: './transfer-container.component.html',
  styleUrls: ['./transfer-container.component.css']
})
export class TransferContainerComponent implements OnInit {
  public transfers: Transfer[];

  constructor(private server: TransferService) { }

  ngOnInit(): void {
    this.server.getAll()
      .subscribe((response: Transfer[]) => {
        this.transfers = response;
      });
  }
}
