import { UserRegistrationModel } from '../Models/UserRegistrationModel';
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { UserHttpServiceService } from '../Services/user-http-service.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface UserState {
  user: UserRegistrationModel;
}

@Injectable()
export class UserStoreService extends ComponentStore<UserState> {
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
    (state: UserState, userData: UserRegistrationModel) => {
      return {
        ...state,
        user: userData,
      };
    }
  );

  readonly addNewUser = this.effect(
    (user: Observable<UserRegistrationModel>) => {
      return user.pipe(
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
      );
    }
  );
}
