import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarBodyFavouritesComponent } from './nav-bar-body-favourites.component';

describe('NavBarBodyFavouritesComponent', () => {
  let component: NavBarBodyFavouritesComponent;
  let fixture: ComponentFixture<NavBarBodyFavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarBodyFavouritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarBodyFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
