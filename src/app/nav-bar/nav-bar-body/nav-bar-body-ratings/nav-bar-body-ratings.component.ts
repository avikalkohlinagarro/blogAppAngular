import {AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar-body-ratings',
  templateUrl: './nav-bar-body-ratings.component.html',
  styleUrls: ['./nav-bar-body-ratings.component.css']
})
export class NavBarBodyRatingsComponent implements OnInit, AfterViewChecked {

  emptyFav: boolean;

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


  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    // this.emptyFav = true;
    // if (this.blogItems != null) {
    //   this.blogItems.forEach(function (item) {
    //     if (this.user.favourites.includes(item.id)) {
    //       this.emptyFav = false;
    //     }
    //   }.bind(this));
    // }
  }

  ngAfterViewChecked() {
    this.emptyFav = true;
    if (this.blogItems != null) {
      this.blogItems.forEach(function (item) {
        if (item.rating >= 4) {
          this.emptyFav = false;
        }
      }.bind(this));
    }
    this.cd.detectChanges();
  }

}
