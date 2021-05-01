import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { RegisterUser } from './../../model/register-user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly componentUrl = environment.baseApiUrl + 'User/';
  constructor(private httpClient: HttpClient) { }

  public registerUser(userData: RegisterUser): Observable<string> {
    const apiUrl = 'registerUser';
    return this.httpClient.post<string>(this.componentUrl + apiUrl, userData);
  }
}
