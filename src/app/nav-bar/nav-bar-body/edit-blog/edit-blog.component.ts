import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare let $: any;
declare function require(name:string);
const dateFormat = require('dateformat');

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  blogText: string;

  @Input('item') item;
  @Output() notifyEdit: EventEmitter<object> = new EventEmitter<object>();
  @Output() cancelEdit: EventEmitter<string> = new EventEmitter<string>();


  cancelAdd() {
    (<HTMLFormElement>(document.getElementById('formBlog'))).reset();
    this.cancelEdit.emit('Add');
  }

  editBlog(blogText: string) {

    (<HTMLFormElement>(document.getElementById('formBlog'))).reset();
    var newBlog = {
      id: this.item.id,
      name: this.item.name,
      author: this.item.author,
      category: this.item.category,
      text: blogText,
      date: dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT"),
      rating: this.item.rating,
      ratingByUser: this.item.ratingByUser,
      ratingUsers: this.item.ratingUsers
    }
    // console.log("Form Submitted");
    // console.log(newBlog);

    this.notifyEdit.emit(newBlog);
    // console.log(author+title+category+blogText);
  }

  constructor() { }

  ngOnInit() {
    (<any>$('select')).material_select();
    $('textarea').focus();
    // console.log(this.item);
    this.blogText = this.item.text;
  }
}
