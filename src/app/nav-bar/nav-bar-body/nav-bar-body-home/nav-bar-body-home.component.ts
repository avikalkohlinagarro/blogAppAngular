import {AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-nav-bar-body-home',
  templateUrl: './nav-bar-body-home.component.html',
  styleUrls: ['./nav-bar-body-home.component.css']
})
export class NavBarBodyHomeComponent implements OnInit, AfterViewChecked {

  homeState: string;
  editItem: object;
  emptyFav: boolean;

  @Input('blogItems') blogItems;
  @Input('username') user;
  @Input('state') state;
  // username: string = this.user.username;
  // @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Output() notify: EventEmitter<object> = new EventEmitter<object>();
  @Output() notifyAdd: EventEmitter<object> = new EventEmitter<object>();
  @Output() notifyDelete: EventEmitter<object> = new EventEmitter<object>();
  @Output() notifyEdit: EventEmitter<object> = new EventEmitter<object>();
  @Output() notifyFav: EventEmitter<object> = new EventEmitter<object>();

  // openBlog(id: string) {
  //   this.notify.emit(id);
  // }

  openBlog(data: object) {
    // console.log(data);
    this.notify.emit(data);
  }

  addBlog(data: object) {
    // console.log(data);
    this.notifyAdd.emit(data);
  }
  deleteBlog(data: object) {
    this.notifyDelete.emit(data);
  }

  editClicked(data) {
    // console.log('Edit Clicked');
    // console.log(data);
    this.homeState = 'Edit';
    this.editItem = data;
    // console.log(this.homeState);
  }

  editFav(data: object) {
    this.notifyFav.emit(data);
  }

  editBlog(data: object) {
    // console.log(data);
    this.homeState = 'Add';
    this.notifyEdit.emit(data);
  }

  cancelEdit(value: string) {
    this.homeState = 'Add';
  }

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.homeState = 'Add';
    $('.modal').modal({
      dismissible: true
    });
    // console.log(this.homeState);
  }

  ngAfterViewChecked() {
    this.emptyFav = true;
    if (this.blogItems != null) {
      this.blogItems.forEach(function (item) {
        if (item.author === this.user.username) {
          this.emptyFav = false;
        }
      }.bind(this));
    }
    this.cd.detectChanges();
  }

}
