import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFriendFormComponent } from './add-friend-form.component';
import {FormBuilder, FormControl} from '@angular/forms';
import {BalanceService} from '../service/balance.service';
import {Router} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {from} from 'rxjs';
import empty = jasmine.empty;

xdescribe('AddFriendFormComponent', () => {
  let component: AddFriendFormComponent;
  let fixture: ComponentFixture<AddFriendFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ AddFriendFormComponent ],
      providers: [
        FormBuilder,
        BalanceService,
        Router]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFriendFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with 2 controls', () => {
    expect(component.form.contains('firstname')).toBeTruthy();
    expect(component.form.contains('lastname')).toBeTruthy();
  });
});




describe('UNIT-AddFriendFormComponent', () => {

  class FakeRouter {
    navigate(input: string[]): void {
      return;
    }
  }

  let component: AddFriendFormComponent;
  let server: BalanceService;
  let router: FakeRouter;

  beforeEach(() => {
    server = new BalanceService(null);
    router = new FakeRouter();
    component = new AddFriendFormComponent(new FormBuilder(), server, router as unknown as Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.form).toBeTruthy();
  });

  it('should create a form with 2 controls', () => {
    expect(component.form.contains('firstname')).toBeTruthy();
    expect(component.form.contains('lastname')).toBeTruthy();
  });

  it('should make \'firstname\' required', () => {
    const control = component.form.get('firstname');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });

  it('should make \'lastname\' optional', () => {
    const control = component.form.get('lastname');

    control.setValue('');

    expect(control.valid).toBeTruthy();
  });

  it('should call server \'create\' method on submit', () => {
    const spy = spyOn(server, 'create').and.callFake(b => from([b]));

    component.onSubmit();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should call router \'navigate\' method on submit', () => {
    spyOn(server, 'create').and.callFake(b => from([b]));
    const spyRouter = spyOn(router, 'navigate').and.callFake(x => empty());

    component.onSubmit();

    expect(spyRouter).toHaveBeenCalledWith(['/balance']);
    expect(spyRouter).toHaveBeenCalledTimes(1);
  });

  it('should return \'firstName\' formControl when call for it', () => {
    const expectedControl = component.form.get('firstname') as FormControl;

    const actualControl = component.firstname;

    expect(actualControl).toBe(expectedControl);
  });

  it('should return \'lastName\' formControl when call for it', () => {
    const expectedControl = component.form.get('lastname') as FormControl;

    const actualControl = component.lastname;

    expect(actualControl).toBe(expectedControl);
  });

});
