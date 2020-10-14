import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceContainerComponent } from './balance-container.component';
import { BalanceService } from '../service/balance.service';
import { from } from 'rxjs';
import {Person} from '../model/person';

xdescribe('BalanceContainerComponent', () => {
  let component: BalanceContainerComponent;
  let fixture: ComponentFixture<BalanceContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('UNIT-BalanceContainerComponent', () => {
  let component: BalanceContainerComponent;
  let server: BalanceService;
  let balances: Person[];

  beforeEach(() => {
    server = new BalanceService(null);
    component = new BalanceContainerComponent(server);
    balances = [
      new Person('someguy', 'thesameguy'),
      new Person('otherguy', 'thesameotherguy')
    ];
  });

  it('should set balances property with the items returned from the server', () => {
    spyOn(server, 'getAll').and.callFake(() => from([balances]));

    component.ngOnInit();

    expect(component.balances).toEqual(balances);
  });

});
