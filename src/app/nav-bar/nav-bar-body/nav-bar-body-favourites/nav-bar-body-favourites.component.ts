import {
  AfterContentInit, AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnInit, Output,
  ViewChild, ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-nav-bar-body-favourites',
  templateUrl: './nav-bar-body-favourites.component.html',
  styleUrls: ['./nav-bar-body-favourites.component.css']
})

export class NavBarBodyFavouritesComponent implements OnInit, AfterContentInit, AfterViewInit, AfterViewChecked {

  emptyFav: boolean;

  @Input('blogItems') blogItems;
  @Input('username') user;
  @Input('state') state;
  @Output() notify: EventEmitter<object> = new EventEmitter<object>();
  @Output() notifyFav: EventEmitter<object> = new EventEmitter<object>();
  @ViewChild('favouritesList') favList;

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

  ngAfterViewInit() {
  }

  ngAfterContentInit() {
  }

  ngAfterViewChecked() {
    this.emptyFav = true;
    if (this.blogItems != null) {
      this.blogItems.forEach(function (item) {
        if (this.user.favourites.includes(item.id)) {
          this.emptyFav = false;
        }
      }.bind(this));
    }
    this.cd.detectChanges();
  }

}
