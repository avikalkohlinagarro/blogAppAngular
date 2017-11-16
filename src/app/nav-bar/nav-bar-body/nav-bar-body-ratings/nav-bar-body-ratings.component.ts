import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar-body-ratings',
  templateUrl: './nav-bar-body-ratings.component.html',
  styleUrls: ['./nav-bar-body-ratings.component.css']
})
export class NavBarBodyRatingsComponent implements OnInit {

  @Input('blogItems') blogItems;
  @Input('username') user;
  @Input('state') state;
  @Output() notify: EventEmitter<object> = new EventEmitter<object>();
  @Output() notifyFav: EventEmitter<object> = new EventEmitter<object>();

  // openBlog(id: string) {
  //   this.notify.emit(id);
  // }
  openBlog(data: object) {
    this.notify.emit(data);
  }

  editFav(data: object) {
    this.notifyFav.emit(data);
  }

  constructor() { }

  ngOnInit() {
  }

}
