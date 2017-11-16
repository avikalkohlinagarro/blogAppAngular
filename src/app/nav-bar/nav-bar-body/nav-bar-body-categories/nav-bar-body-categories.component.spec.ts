import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarBodyCategoriesComponent } from './nav-bar-body-categories.component';

describe('NavBarBodyCategoriesComponent', () => {
  let component: NavBarBodyCategoriesComponent;
  let fixture: ComponentFixture<NavBarBodyCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarBodyCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarBodyCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
