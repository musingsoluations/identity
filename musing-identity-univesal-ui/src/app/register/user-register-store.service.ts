/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import { UserRegistrationModel } from './user-registration-model';

@Injectable({
  providedIn: 'root'
})

interface UserState {
  user: UserRegistrationModel;
}

export class UserRegisterStoreService extends ComponentStore<UserState> {
  constructor(private userHttpService: UserHttpServiceService) {
    super({
      user: {
        UserName: '',
        LastName: '',
        PhoneNumber: '',
        RenterPassword: '',
        Password: '',
        FirstName: '',
        Email: '',
      },
    });
  }

  private readonly user$: Observable<UserRegistrationModel> = this.select(
    (state) => state.user
  );

  readonly addUser = this.updater(
    (state: UserState, userData: UserRegistrationModel) => ({
        ...state,
        user: userData,
      })
  );

  readonly addNewUser = this.effect(
    (user: Observable<UserRegistrationModel>) => user.pipe(
        switchMap((userdata) => {
          return this.userHttpService.RegisterUSer(userdata).pipe(
           tapResponse(data=>{
             this.addUser(userdata);
             console.log(data);
           },
             (error => {
               console.log(error)
             })
             )
          );
        })
      )
  );
}
