import {Component, Input, OnInit} from '@angular/core';
import {BlogListService} from "../../blog-list.service";
import {UserListService} from "../../user-list.service";

@Component({
  selector: 'app-nav-bar-body',
  templateUrl: './nav-bar-body.component.html',
  styleUrls: ['./nav-bar-body.component.css']
})
export class NavBarBodyComponent implements OnInit {

  blogDetailId: number;
  blogDetailData: object;

  @Input('menuItem') item;
  @Input('category') categorySelected;
  @Input('searchName') searchedName;
  @Input('username') user;

  blogItems: object [];
  // blogItems: object [] = [
  //   {
  //     id: 0,
  //     name: 'Blog 1',
  //     author: 'Aayushi Malik',
  //     date: '29th December',
  //     text: 'My Blog yay',
  //     category: 'Technology',
  //     rating: 8.7
  //   },
  //   {
  //     id: 1,
  //     name: 'Blog 2',
  //     author: 'Avikal Kohli',
  //     date: '23rd May',
  //     text: 'My Own Blog :)',
  //     category: 'Sports',
  //     rating: 6.8
  //   },
  // ];

  // openBlog(id) {
  //   this.blogDetailId = id;
  //   // console.log(this.blogDetailId);
  // }
  openBlog(data) {
    // console.log("Reached Main")
    // console.log(data);
    this.blogDetailData = data;
    // console.log(this.blogDetailId);
  }

  // goToHome(value: number) {
  //   this.blogDetailId = value;
  //   // this.item = 'Home';
  // }
  goToHome(value: object) {
    this.blogDetailData = value;
    // this.item = 'Home';
  }

  constructor(private request: BlogListService, private requestUser: UserListService) {
    // this.blogDetailId = null;
  }

  initialiseData() {
    this.request.getData()
      .subscribe((data) => {
        this.blogItems = data;
        // console.log(data);
      });
  }

  ngOnInit() {
    this.initialiseData();
    if (localStorage.getItem('userDetails') != null) {
      this.user = JSON.parse(localStorage.getItem('userDetails'));
    }
  }

  addBlog(data) {
    console.log(data);
    this.request.postData(data)
      .subscribe(data => {
        this.blogItems.push(data);
      });
  }

  deleteBlog(data) {
    this.request.deleteData(data)
      .subscribe(data => {
        this.initialiseData();
        console.log('Deleted');
      });
  }

  editClicked(data) {
    console.log('Edit Clicked');
    console.log(data);
  }

  updateBlog(data) {
    this.request.updateData(data.id, data)
      .subscribe(data => {
        this.initialiseData();
        console.log('Updated');
      });
  }

  updateUser(data) {
    // console.log(data);
    localStorage.setItem('userDetails', JSON.stringify(data));
    this.requestUser.updateData(data.id, data)
      .subscribe(data => {
        // localStorage.setItem('userDetails', data);
        this.initialiseData();
        console.log('Updated');
      });
  }
}
