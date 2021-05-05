/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RegisterUser } from 'src/app/common/model/register-user';
import { UserService } from 'src/app/common/service/http/user.service';

interface UserState {
  user: RegisterUser;
}

@Injectable()
export class RegisterUserStore extends ComponentStore<UserState> {
  constructor(private userHttpService: UserService) {
    super({
      user: {
        Name: '',
        PhoneNumber: '',
        Email: '',
        Password: '',
        RenterPassword: '',
        UserName: ''
      },
    });
  }

  private readonly user$: Observable<RegisterUser> = this.select(
    (state) => state.user
  );

  readonly addUser = this.updater(
    (state: UserState, userData: RegisterUser) => ({
      ...state,
      user: userData,
    })
  );

  readonly addNewUser = this.effect(
    (user: Observable<RegisterUser>) => user.pipe(
      switchMap((userData) => this.userHttpService.registerUser(userData).pipe(
        tapResponse(data => {
          this.addUser(userData);
          console.log(data);
        },
          (error => {
            console.log(error);
          })
        )
      ))
    )
  );
}
