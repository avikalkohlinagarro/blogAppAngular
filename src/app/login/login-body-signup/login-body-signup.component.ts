import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login-body-signup',
  templateUrl: './login-body-signup.component.html',
  styleUrls: ['./login-body-signup.component.css']
})
export class LoginBodySignupComponent implements OnInit {

  @Input('users') users;
  @Output() notifyAdd: EventEmitter<object> = new EventEmitter<object>();

  cancelAdd() {
    (<HTMLFormElement>(document.getElementById('formUser'))).reset();
  }

  clearCustomValidity() {
    (<HTMLInputElement>(document.getElementById('username'))).setCustomValidity('');
    (<HTMLInputElement>(document.getElementById('password'))).setCustomValidity('');
    (<HTMLInputElement>(document.getElementById('confirmpassword'))).setCustomValidity('');
  }

  checkUserDetails(username: string, password: string, confirmPassword: string) {
    let userValue: string;
    const USER_EXISTS = 'User Already Exists';
    const PASSWORD_MISMATCH = 'Passwords Do Not Match';
    const USER_CREATED = 'User Created';
    userValue = USER_CREATED;
    if (password !== confirmPassword) {
      userValue = PASSWORD_MISMATCH;
      (<HTMLInputElement>(document.getElementById('confirmpassword'))).setCustomValidity(PASSWORD_MISMATCH);
      (<HTMLFormElement>(document.getElementById('confirmpassword'))).reportValidity();
    }
    this.users.forEach(function (user) {
      if (user.username === username) {
        userValue = USER_EXISTS;
        (<HTMLInputElement>(document.getElementById('username'))).setCustomValidity(USER_EXISTS);
        (<HTMLFormElement>(document.getElementById('username'))).reportValidity();
      }
    }.bind(this));

    if (userValue === USER_CREATED) {
      this.addUser(username,password);
    }
  }

  addUser(username: string, password: string) {

    (<HTMLFormElement>(document.getElementById('formUser'))).reset();
    var newUser = {
      username: username,
      password: password,
      favourites: []
    };
    this.notifyAdd.emit(newUser);
  }

  constructor() { }

  ngOnInit() {
  }

}
