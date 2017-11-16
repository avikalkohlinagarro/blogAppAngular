import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login-body-login',
  templateUrl: './login-body-login.component.html',
  styleUrls: ['./login-body-login.component.css']
})
export class LoginBodyLoginComponent implements OnInit {

  @Input('users') users;
  @Output() notifyLogin: EventEmitter<object> = new EventEmitter<object>();

  cancelAdd() {
    (<HTMLFormElement>(document.getElementById('formUser'))).reset();
  }

  clearCustomValidity() {
    (<HTMLInputElement>(document.getElementById('username'))).setCustomValidity('');
    (<HTMLInputElement>(document.getElementById('password'))).setCustomValidity('');
  }

  checkUser(username: string, password: string) {
    let userValue: string;
    const USER_DOESNT_EXIST = 'User Doesnt Exist';
    const CORRECT_PASSWORD = 'Correct Password';
    const INCORRECT_PASSWORD = 'Incorrect Password';
    userValue = USER_DOESNT_EXIST;
    this.users.forEach(function (user) {
      if (user.username === username) {
        if (user.password === password) {
          userValue = CORRECT_PASSWORD;
          this.loginUser(user);
        } else {
          userValue = INCORRECT_PASSWORD;
          (<HTMLInputElement>(document.getElementById('password'))).setCustomValidity(INCORRECT_PASSWORD);
          (<HTMLFormElement>(document.getElementById('password'))).reportValidity();
        }
      }
    }.bind(this));
    if (userValue === USER_DOESNT_EXIST) {
      (<HTMLInputElement>(document.getElementById('username'))).setCustomValidity(USER_DOESNT_EXIST);
      (<HTMLFormElement>(document.getElementById('username'))).reportValidity();
    }
  }

  loginUser(user: object) {
    this.notifyLogin.emit(user);
  }

  constructor() { }

  ngOnInit() {
  }

}
