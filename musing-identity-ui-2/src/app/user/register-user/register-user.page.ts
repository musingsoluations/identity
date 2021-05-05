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

  userInputForm = this.fb.group({
    Name: ['', Validators.required],
    PhoneNumber: ['', Validators.required],
    Email: ['', Validators.required],
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
    const userInput: RegisterUser = this.userInputForm.value;
    userInput.UserName = this.userInputForm.value.Email;
    this.userStore.addNewUser(userInput);
    console.warn(userInput);
  }

}
