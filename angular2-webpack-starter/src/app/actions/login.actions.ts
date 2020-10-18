import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './../reducers/store/app.state';

export interface LoginAction extends Action {
    value: boolean;
    status: boolean
}

@Injectable()
export class LoginActions {
  static readonly LOG_IN = 'LOG_IN';
  static readonly LOG_OUT = 'LOG_OUT';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  login() {
    this.ngRedux.dispatch({ type: LoginActions.LOG_IN });
  }

  logout() {
    this.ngRedux.dispatch({ type: LoginActions.LOG_OUT });
  }
}
