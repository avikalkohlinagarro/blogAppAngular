import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarBodySearchComponent } from './nav-bar-body-search.component';

describe('NavBarBodySearchComponent', () => {
  let component: NavBarBodySearchComponent;
  let fixture: ComponentFixture<NavBarBodySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarBodySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarBodySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
