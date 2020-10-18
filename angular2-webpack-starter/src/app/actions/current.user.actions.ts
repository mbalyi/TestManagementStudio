import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './../reducers/store/app.state';

import { User } from './../api/index';

export interface CurrentUserAction extends Action {
    currentUser: User
}

@Injectable()
export class CurrentUserActions {
  static readonly SET_CURRENT_USER = 'SET_CURRENT_USER';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  login(user : User) {
    this.ngRedux.dispatch({ type: CurrentUserActions.SET_CURRENT_USER, currentUser: user });
  }
}
