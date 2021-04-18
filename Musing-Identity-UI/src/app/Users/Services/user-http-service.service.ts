/*************************************************************************************
 *  © Musing Solution
 *  Author: Chanakya Sankritayayana
 *  Date: 17-April-2021
 *  Use: Service is used to send the http request to the server for user related action
 */


import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserRegistrationModel} from "../Models/UserRegistrationModel";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserHttpServiceService {

  constructor(private httpClient: HttpClient) { }

  public RegisterUSer(userData : UserRegistrationModel): Observable<any>{
    return this.httpClient.get<any>("");
  }

}
