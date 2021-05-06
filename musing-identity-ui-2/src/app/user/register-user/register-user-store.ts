/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, of } from 'rxjs';
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
          (err => {
            console.log(err);
            if (err instanceof HttpErrorResponse) {
              if (err.status === 400) {
                const errorObject = err.error.errors ? err.error.errors : err.error;
                Object.values(errorObject).forEach((prop: any) => {
                  const errorToDisplay = prop.description ? prop.description : prop;
                  alert(errorToDisplay);
                });
              }
              console.warn(err.error);
            }
          })
        )
      ))
    )
  );
}
