import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './../reducers/store/app.state';

import { Users } from './../models/users.model';

export interface CurrentUserAction extends Action {
    currentUser: Users
}

@Injectable()
export class CurrentUserActions {
  static readonly SET_CURRENT_USER = 'SET_CURRENT_USER';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  login(user : Users) {
    this.ngRedux.dispatch({ type: CurrentUserActions.SET_CURRENT_USER, currentUser: user });
  }
}
