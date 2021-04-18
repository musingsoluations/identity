import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { UserRegistrationModel } from '../Models/UserRegistrationModel';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {
  userInputForm = this.fb.group({
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Email: ['', Validators.required],
    Password: ['', Validators.required],
    RenterPassword: ['', Validators.required],
    PhoneNumber: ['', Validators.required],
  });

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    let userInput: UserRegistrationModel = this.userInputForm.value;
    userInput.UserName = this.userInputForm.value.Email;
    console.warn(userInput);
  }
  clearForm(): void {
    this.userInputForm.reset();
  }
}
