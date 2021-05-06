/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RegisterUserStore } from './register-user-store';
import * as FromHttpState from '../../common/store/requestInProgress/state';
import * as FromHttpAction from '../../common/store/requestInProgress/index';
import { RegisterUser } from 'src/app/common/model/register-user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
  providers: [RegisterUserStore],
})
export class RegisterUserPage implements OnInit {

  validationMessages = {
    Name: [
      { type: 'required', message: 'Name is required.' },
      { type: 'minlength', message: 'Name must be at least 3 characters long.' },
      { type: 'maxlength', message: 'Name cannot be more than 100 characters long.' },
    ],
    PhoneNumber: [
      { type: 'required', message: 'Mobile number is required.' },
      { type: 'minlength', message: 'Mobile number must be 10 characters long.' },
      { type: 'maxlength', message: 'Mobile number must be 10 characters long.' }
    ],
    Email: [
      { type: 'required', message: 'Mobile number is required.' },
      { type: 'email', message: 'email is invalid.' },
    ],
  };

  isSubmitted = false;
  userInputForm = this.fb.group({
    Name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
    PhoneNumber: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    Email: ['', Validators.compose([Validators.required, Validators.email])],
    Password: ['', Validators.required],
    RenterPassword: ['', Validators.required],
  });

  isRequestInProgress$ = new Observable<boolean>();
  constructor(
    public fb: FormBuilder,
    private httpStore: Store<FromHttpState.HttpRequestState>,
    private userStore: RegisterUserStore

  ) { }

  ngOnInit() {
    this.isRequestInProgress$ = this.httpStore.select(
      FromHttpAction.getHttpState
    );
  }

  onSubmit(): void {
    this.isSubmitted = true;
    const userInput: RegisterUser = this.userInputForm.value;
    userInput.UserName = this.userInputForm.value.Email;
    this.userStore.addNewUser(userInput);
    console.warn(userInput);
  }

  get errorControl() {
    return this.userInputForm.controls;
  }

}
