import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarBodyRatingsComponent } from './nav-bar-body-ratings.component';

describe('NavBarBodyRatingsComponent', () => {
  let component: NavBarBodyRatingsComponent;
  let fixture: ComponentFixture<NavBarBodyRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarBodyRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarBodyRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
