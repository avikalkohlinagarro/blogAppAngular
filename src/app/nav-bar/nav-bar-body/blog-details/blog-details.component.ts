import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  // @Input('blogID') blogID;
  // @Input('blogItems') blogItems;
  @Input('username') user;
  @Input('blogDetailData') blogDetailData;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Output() notifyFavourite: EventEmitter<object> = new EventEmitter<object>();

  isFavourite: boolean;

  goBack() {
    // this.blogID = null;
    // this.notify.emit(this.blogID);
    this.blogDetailData = null;
    this.notify.emit(this.blogDetailData);
  }

  favouriteBlog(data) {
    this.isFavourite = true;
    console.log('Added To Favourites');
    data.favourites.push(this.blogDetailData.id);
    this.notifyFavourite.emit(data);
    // console.log(data);
  }

  unfavouriteBlog(data) {
    this.isFavourite = false;
    const index = data.favourites.indexOf(this.blogDetailData.id);
    if (index > -1) {
      data.favourites.splice(index, 1);
    }
    console.log('Removed from Favourites');
    this.notifyFavourite.emit(data);
    // console.log(data);
  }

  constructor() {}

  ngOnInit() {
    this.isFavourite = false;
    this.user.favourites.forEach(function (id) {
      if (this.blogDetailData.id === id) {
        this.isFavourite = true;
      }
    }.bind(this));
  }

}
