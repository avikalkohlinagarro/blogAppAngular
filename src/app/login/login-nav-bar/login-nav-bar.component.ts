import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login-nav-bar',
  templateUrl: './login-nav-bar.component.html',
  styleUrls: ['./login-nav-bar.component.css']
})
export class LoginNavBarComponent implements OnInit {

  selected: string;
  menuItems: object [] = [
    {
      name: 'Login'
    },
    {
      name: 'SignUp'
    }
  ];

  @Output() notifySelected: EventEmitter<string> = new EventEmitter<string>();

  select(name: string) {
    this.selected = name;
    this.notifySelected.emit(this.selected);
  }

  constructor() { }

  ngOnInit() {
  }

}
