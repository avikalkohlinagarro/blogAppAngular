import {Component, EventEmitter, OnInit, Output} from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  username: string;
  // @Output() notifyUser: EventEmitter<string> = new EventEmitter<string>();

  changeUsername(value) {
    this.username = value;
    localStorage.setItem('userDetails',JSON.stringify(this.username));
    // console.log(value);
    // this.notify.emit(value);
  }


  constructor() {
    // this.username = 'Avikal Kohli';
  }

  logout(data) {
    this.username = null;
    localStorage.removeItem('userDetails');
  }

  ngOnInit() {
    // this.username = 'Avikal Kohli';
    if (localStorage.getItem('userDetails') != null) {
      this.username = JSON.parse(localStorage.getItem('userDetails'));
    }
    // $(document).ready(function(){
    $('.dropdown-button').dropdown();
    $('.button-collapse').sideNav({
      closeOnClick: true
    })
    $('.collapsible').collapsible();
    $('select').material_select();
    $('select[required]').attr('tabindex',-1);
    $('select[required]').css({
      display: 'inline',
      position: 'absolute',
      float: 'left',
      padding: 0,
      margin: 0,
      border: '1px solid rgba(255,255,255,0)',
      height: 0,
      width: 0,
      top: '2em',
      left: '3em',
      opacity: 0,
      pointerEvents: 'none'
    });
    // });
  }
}
