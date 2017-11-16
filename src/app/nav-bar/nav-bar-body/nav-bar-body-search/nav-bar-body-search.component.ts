import {AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar-body-search',
  templateUrl: './nav-bar-body-search.component.html',
  styleUrls: ['./nav-bar-body-search.component.css']
})
export class NavBarBodySearchComponent implements OnInit, AfterViewChecked {

  emptyFav: boolean;

  @Input('searchName') searchName;
  @Input('blogItems') blogItems;
  @Input('username') user;
  @Input('state') state;
  @Output() notify: EventEmitter<object> = new EventEmitter<object>();
  @Output() notifyFav: EventEmitter<object> = new EventEmitter<object>();

  openBlog(data: object) {
    this.notify.emit(data);
  }

  editFav(data: object) {
    this.notifyFav.emit(data);
  }

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewChecked() {
    this.emptyFav = true;
    if (this.blogItems != null) {
      this.blogItems.forEach(function (item) {
        if (item.category === this.categorySelected) {
          this.emptyFav = false;
        }
      }.bind(this));
    }
    this.cd.detectChanges();
  }
}
