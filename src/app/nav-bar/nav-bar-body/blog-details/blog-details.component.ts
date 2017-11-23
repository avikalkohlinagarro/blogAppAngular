import {AfterViewChecked, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare let $: any;
declare function require(name: string);
const dateFormat = require('dateformat');

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit, AfterViewChecked {

  // @Input('blogID') blogID;
  // @Input('blogItems') blogItems;
  @Input('username') user;
  @Input('blogDetailData') blogDetailData;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Output() notifyFavourite: EventEmitter<object> = new EventEmitter<object>();
  @Output() notifyRating: EventEmitter<object> = new EventEmitter<object>();

  rating: number;

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

  setRating(number) {
    if (this.blogDetailData.ratingUsers.indexOf(this.user.username) === -1) {
      this.blogDetailData.ratingUsers.push(this.user.username);
      this.blogDetailData.ratingByUser.push(number);
      // const lengthUser = this.blogDetailData.ratingUsers.length;
      // this.blogDetailData.rating = (this.blogDetailData.rating * (lengthUser - 1) + number) / lengthUser;
    } else {
      const indexUser = this.blogDetailData.ratingUsers.indexOf(this.user.username);
      this.blogDetailData.ratingByUser[indexUser] = number;
    }
    const lengthUser = this.blogDetailData.ratingUsers.length;
    this.blogDetailData.rating = this.blogDetailData.ratingByUser.reduce((a, b) => a + b, 0) / lengthUser;
    const newBlog = {
      id: this.blogDetailData.id,
      name: this.blogDetailData.name,
      author: this.blogDetailData.author,
      category: this.blogDetailData.category,
      text: this.blogDetailData.text,
      date: dateFormat(new Date(), 'dddd, mmmm dS, yyyy, h:MM:ss TT'),
      rating: this.blogDetailData.rating,
      ratingByUser: this.blogDetailData.ratingByUser,
      ratingUsers: this.blogDetailData.ratingUsers
    };
    console.log(newBlog);
    this.notifyRating.emit(newBlog);
  }

  constructor() {}

  ngOnInit() {
    this.isFavourite = false;
    this.user.favourites.forEach(function (id) {
      if (this.blogDetailData.id === id) {
        this.isFavourite = true;
      }
    }.bind(this));
    if (this.blogDetailData.ratingUsers.indexOf(this.user.username) !== -1) {
      console.log(this.blogDetailData.ratingUsers.indexOf(this.user.username));
      console.log(this.blogDetailData.ratingByUser)
      this.rating = this.blogDetailData.ratingByUser[this.blogDetailData.ratingUsers.indexOf(this.user.username)];
    }
  }

  ngAfterViewChecked() {
    // console.log(this.rating);
  }

}
