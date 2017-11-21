import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarHeaderComponent } from './nav-bar/nav-bar-header/nav-bar-header.component';
import { NavBarBodyComponent } from './nav-bar/nav-bar-body/nav-bar-body.component';
import { NavBarBodyHomeComponent } from './nav-bar/nav-bar-body/nav-bar-body-home/nav-bar-body-home.component';
import { NavBarBodyFavouritesComponent } from './nav-bar/nav-bar-body/nav-bar-body-favourites/nav-bar-body-favourites.component';
import { NavBarBodyCategoriesComponent } from './nav-bar/nav-bar-body/nav-bar-body-categories/nav-bar-body-categories.component';
import { NavBarBodySearchComponent } from './nav-bar/nav-bar-body/nav-bar-body-search/nav-bar-body-search.component';
import { BlogDetailsComponent } from './nav-bar/nav-bar-body/blog-details/blog-details.component';
import { BlogHeaderComponent } from './nav-bar/nav-bar-body/blog-header/blog-header.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {BlogListService} from './blog-list.service';
import {HttpModule} from '@angular/http';
import { AddBlogComponent } from './nav-bar/nav-bar-body/add-blog/add-blog.component';
import { EditBlogComponent } from './nav-bar/nav-bar-body/edit-blog/edit-blog.component';
import { LoginNavBarComponent } from './login/login-nav-bar/login-nav-bar.component';
import { LoginBodyLoginComponent } from './login/login-body-login/login-body-login.component';
import { LoginBodySignupComponent } from './login/login-body-signup/login-body-signup.component';
import {UserListService} from "./user-list.service";
import { NavBarBodyRatingsComponent } from './nav-bar/nav-bar-body/nav-bar-body-ratings/nav-bar-body-ratings.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarHeaderComponent,
    NavBarBodyComponent,
    NavBarBodyHomeComponent,
    NavBarBodyFavouritesComponent,
    NavBarBodyCategoriesComponent,
    NavBarBodySearchComponent,
    BlogDetailsComponent,
    BlogHeaderComponent,
    LoginComponent,
    AddBlogComponent,
    EditBlogComponent,
    LoginNavBarComponent,
    LoginBodyLoginComponent,
    LoginBodySignupComponent,
    NavBarBodyRatingsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BlogListService, UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
