import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBodyLoginComponent } from './login-body-login.component';

describe('LoginBodyLoginComponent', () => {
  let component: LoginBodyLoginComponent;
  let fixture: ComponentFixture<LoginBodyLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBodyLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBodyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
