import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferContainerComponent } from './transfer-container.component';
import {from} from 'rxjs';
import {TransferService} from '../service/transfer.service';
import {Transfer} from '../model/transfer';

xdescribe('TransferContainerComponent', () => {
  let component: TransferContainerComponent;
  let fixture: ComponentFixture<TransferContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('UNIT-TransferContainerComponent', () => {
  let component: TransferContainerComponent;
  let server: TransferService;
  let transfers: Transfer[];

  beforeEach(() => {
    server = new TransferService(null);
    component = new TransferContainerComponent(server);
    transfers = [
      new Transfer('ifn1', 'iln1', 'rfn1', 'rln1', 1),
      new Transfer('ifn2', 'iln2', 'rfn2', 'rln2', 1)
    ];
  });

  it('should set transfers property with the items returned from the server', () => {
    spyOn(server, 'getAll').and.callFake(() => from([transfers]));

    component.ngOnInit();

    expect(component.transfers).toEqual(transfers);
  });

});
