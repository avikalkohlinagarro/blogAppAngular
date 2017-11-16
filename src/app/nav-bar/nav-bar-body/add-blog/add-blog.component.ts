import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import * as $ from 'jquery';
declare let $: any;
// declare var jQuery: any;
declare function require(name:string);
const dateFormat = require('dateformat');

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  // author: string;
  @Input('user') user;
  @Output() notifyAdd: EventEmitter<object> = new EventEmitter<object>();

  // formatDate(date) {
  //   var monthNames = [
  //     "January", "February", "March",
  //     "April", "May", "June", "July",
  //     "August", "September", "October",
  //     "November", "December"
  //   ];
  //
  //   var day = date.getDate();
  //   var monthIndex = date.getMonth();
  //   var year = date.getFullYear();
  //
  //   return monthNames[monthIndex] + ' ' + day + ', '  + year;
  // }

  cancelAdd() {
    (<HTMLFormElement>(document.getElementById('formBlog'))).reset();
  }

  addBlog(title: string, category: string, blogText: string) {

    (<HTMLFormElement>(document.getElementById('formBlog'))).reset();
    var newBlog = {
      name: title,
      // author: author,
      author: this.user.username,
      category: category,
      text: blogText,
      date: dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT"),
      rating: 0,
      ratingUsers: []
    }
    // console.log("Form Submitted");
    // console.log(newBlog);

    this.notifyAdd.emit(newBlog);
    // console.log(author+title+category+blogText);
  }

  constructor() { }

  ngOnInit() {
    (<any>$('select')).material_select();
    // $('select[required]').attr('tabindex',-1);
    // $('select[required]').css({
    //   display: 'inline',
    //   position: 'absolute',
    //   float: 'left',
    //   padding: 0,
    //   margin: 0,
    //   border: '1px solid rgba(255,255,255,0)',
    //   height: 0,
    //   width: 0,
    //   top: '2em',
    //   left: '3em',
    //   opacity: 0,
    //   pointerEvents: 'none'
    // });
  }

}
