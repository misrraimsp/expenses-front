import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BalanceService} from '../service/balance.service';
import {Person} from '../model/person';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-friend-form',
  templateUrl: './add-friend-form.component.html',
  styleUrls: ['./add-friend-form.component.css']
})
export class AddFriendFormComponent {

  form: FormGroup;

  constructor(fb: FormBuilder, private server: BalanceService, private router: Router) {
    this.form = fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
    });
  }

  get firstName(): FormControl{ return this.form.get('firstname') as FormControl; }

  get lastName(): FormControl{ return this.form.get('lastname') as FormControl; }

  onSubmit(): void {
    this.server.create(new Person(this.firstName.value, this.lastName.value)).subscribe((response: Person) => {
      console.log(response);
      this.router.navigate(['/balance']);
    });
  }

}
