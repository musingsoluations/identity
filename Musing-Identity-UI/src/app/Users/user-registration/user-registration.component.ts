import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserRegistrationModel } from '../Models/UserRegistrationModel';
import * as FromHttpState from '../../Common/store/httpRequestStore/state';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as FromHttpAction from '../../Common/store/httpRequestStore';
import { UserStoreService } from './user.store.services.tx';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
  providers: [UserStoreService],
})
export class UserRegistrationComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
    private httpStore: Store<FromHttpState.HttpRequestState>,
    private httpClient: HttpClient,
    private userStore: UserStoreService
  ) {}

  userInputForm = this.fb.group({
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Email: ['', Validators.required],
    Password: ['', Validators.required],
    RenterPassword: ['', Validators.required],
    PhoneNumber: ['', Validators.required],
  });

  isRequestInProgress$ = new Observable<boolean>();

  ngOnInit(): void {
    this.isRequestInProgress$ = this.httpStore.select(
      FromHttpAction.getHttpState
    );
  }

  onSubmit(): void {
    const userInput: UserRegistrationModel = this.userInputForm.value;
    userInput.UserName = this.userInputForm.value.Email;
    // this.httpClient
    //   .post('https://localhost:44371/api/User/registerUser', userInput)
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    this.userStore.addNewUser(userInput);
    console.warn(userInput);
  }

  clearForm(): void {
    this.userInputForm.reset();
  }
}
