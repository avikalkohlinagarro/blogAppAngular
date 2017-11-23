import {AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare let $: any;
// import * as $ from 'jquery';
// import $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, AfterViewChecked {

  selected: string;
  selectedCategory: string;
  searchedName: string;
  searchValue: string;
  @Input('username') username;
  @Output() notifyUser: EventEmitter<string> = new EventEmitter<string>();

  countFavourites: number;

  // menuItems: object [] = [
  //   {
  //     name: 'Home'
  //   },
  //   {
  //     name: 'Favourites'
  //   },
  //   {
  //     name: 'Categories'
  //   }
  // ];
  menuItems: object [] = [
    {
      name: 'Home'
    },
    {
      name: 'Favourites'
    },
    {
      name: 'Categories'
    },
    {
      name: 'Top Rated'
    }
  ];

  categoriesDropdown: object [] = [
    {
      name: 'Technology'
    },
    {
      name: 'Sports'
    },
    {
      name: 'Current Affairs'
    },
    {
      name: 'Politics'
    },
    {
      name: 'India'
    },
    {
      name: 'Personal'
    }
  ];

  select(name: string, category: string) {
    this.selected = name;
    this.selectedCategory = category;
    this.searchedName = name;
    this.searchedName = null;
  }

  searchBlogs(name: string) {
    // this.searchValue = null;
    (<HTMLInputElement>document.getElementById('searchInput')).value = null;
    // console.log(name);
  }

  searchBlogsDynamic(name: string) {
    this.searchedName = name;
    // this.searchValue = null;
    if (this.searchedName === '') {
      this.selected = 'Home';
    }
    // (<HTMLInputElement>document.getElementById('searchInput')).value = null;
    // console.log(name);
  }

  logout() {
    this.notifyUser.emit('Logout');
  }

  clearSearchValue() {
    (<HTMLInputElement>document.getElementById('search')).value = '';
    this.searchedName = '';
    this.selected = 'Home';
  }

  openTapTarget() {
    $('.tap-target').tapTarget('open');
  }

  constructor(private cd: ChangeDetectorRef) {
    // this.selected = 'Home';
    // console.log(this.username);
    // $('.button-collapse').sideNav();
  }

  ngOnInit() {
    this.selected = 'Home';
    // $('.button-collapse').sideNav();
    // console.log($('.button-collapse'));
    // console.log(this.username);
    $('.dropdown-button').dropdown();
    $('.button-collapse').sideNav({
      closeOnClick: true
    });
    $('.collapsible').collapsible();
    $('select').material_select();
    $('select[required]').attr('tabindex', -1);
    $('select[required]').css({
      display: 'inline',
      position: 'absolute',
      float: 'left',
      padding: 0,
      margin: 0,
      border: '1px solid rgba(255,255,255,0)',
      height: 0,
      width: 0,
      top: '2em',
      left: '3em',
      opacity: 0,
      pointerEvents: 'none'
    });
    $('.modal').modal();
    // });
  }

  ngAfterViewChecked() {
    this.countFavourites = this.username.favourites.length;
    // console.log(this.countFavourites);
    this.cd.detectChanges();
  }

}
