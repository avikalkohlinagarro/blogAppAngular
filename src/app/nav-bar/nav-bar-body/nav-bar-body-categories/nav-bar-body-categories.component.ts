import {AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar-body-categories',
  templateUrl: './nav-bar-body-categories.component.html',
  styleUrls: ['./nav-bar-body-categories.component.css']
})
export class NavBarBodyCategoriesComponent implements OnInit, AfterViewChecked {

  emptyFav: boolean;

  @Input('blogItems') blogItems;
  @Input('category') categorySelected;
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
