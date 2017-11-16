import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBodySignupComponent } from './login-body-signup.component';

describe('LoginBodySignupComponent', () => {
  let component: LoginBodySignupComponent;
  let fixture: ComponentFixture<LoginBodySignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBodySignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBodySignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
