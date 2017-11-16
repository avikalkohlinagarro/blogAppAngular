import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarBodyHomeComponent } from './nav-bar-body-home.component';

describe('NavBarBodyHomeComponent', () => {
  let component: NavBarBodyHomeComponent;
  let fixture: ComponentFixture<NavBarBodyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarBodyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarBodyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
