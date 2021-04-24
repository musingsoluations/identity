/*************************************************************************************
 *  © Musing Solution
 *  Author: Chanakya Sankritayayana
 *  Date: 17-April-2021
 *  Use: DTO interface to send/retrieve data fromc api for user registration
 */

export interface UserRegistrationModel {
  FirstName: string;
  LastName: string;
  UserName: string;
  Password: string;
  RenterPassword: string;
  Email: string;
  PhoneNumber: string;
}
