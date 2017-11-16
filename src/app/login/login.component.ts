import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserListService} from "../user-list.service";
declare let $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentUser: string;
  selected: string;
  users: object [];
  @Output() notifyUser: EventEmitter<object> = new EventEmitter<object>();

  changeSelected(value: string) {
    this.selected = value;
  }

  loginUser(data: object) {
    this.notifyUser.emit(data);
    // console.log(data);
  }

  // getIDUser(user) {
  //   console.log(user);
  // }

  constructor(private request: UserListService) { }

  initialiseData() {
    this.request.getData()
      .subscribe((data) => {
        this.users = data;
        // console.log(data);
      });
  }

  ngOnInit() {
    this.selected = 'Login';
    this.initialiseData();
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav({
      closeOnClick: true
    });
    $('.collapsible').collapsible();
  }


  addUser(data) {
    // console.log(data);
    this.request.postData(data)
      .subscribe(data => {
        this.users.push(data);
        // this.initialiseData();
        console.log('Added');
        // this.getIDUser(data);
        this.loginUser(data);
        // console.log(this.users);
      });
  }

  deleteUser(data) {
    this.request.deleteData(data)
      .subscribe(data => {
        this.initialiseData();
        console.log('Deleted');
      });
  }

  updateUser(data) {
    this.request.updateData(data.id, data)
      .subscribe(data => {
        this.initialiseData();
        console.log('Updated');
      });
  }

}
