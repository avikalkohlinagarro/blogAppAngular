import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.css']
})
export class BlogHeaderComponent implements OnInit {

  @Input('item') item;
  @Input('state') state;
  @Input('user') user;
  @Output() notifyOpen: EventEmitter<object> = new EventEmitter<object>();
  @Output() notifyDelete: EventEmitter<object> = new EventEmitter<object>();
  @Output() notifyEdit: EventEmitter<object> = new EventEmitter<object>();
  @Output() notifyFavourite: EventEmitter<object> = new EventEmitter<object>();

  isFavourite: boolean;

  openBlog(data: object) {
    this.notifyOpen.emit(data);
  }

  deleteBlog(data: object) {
    this.notifyDelete.emit(data);
  }

  editBlog(data: object) {
    this.notifyEdit.emit(data);
  }

  favouriteBlog(data) {
    this.isFavourite = true;
    // console.log('Added To Favourites');
    data.favourites.push(this.item.id);
    this.notifyFavourite.emit(data);
    // console.log(data);
  }

  unfavouriteBlog(data) {
    this.isFavourite = false;
    const index = data.favourites.indexOf(this.item.id);
    if (index > -1) {
      data.favourites.splice(index, 1);
    }
    // console.log('Removed from Favourites');
    this.notifyFavourite.emit(data);
    // console.log(data);
  }

  constructor() { }

  ngOnInit() {
    this.isFavourite = false;
    this.user.favourites.forEach(function (id) {
      if (this.item.id == id) {
        this.isFavourite = true;
      }
    }.bind(this));
    // console.log(this.isFavourite);
  }

}
