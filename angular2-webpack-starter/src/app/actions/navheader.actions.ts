import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './../reducers/store/app.state';

import { NavPage } from './../components/navheader/navheader.context';

export interface NavPageAction extends Action {
    page: NavPage
}

@Injectable()
export class NavPageActions {
  static readonly SET_NAV_PAGE = 'SET_NAV_PAGE';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  login(page : NavPage) {
    this.ngRedux.dispatch({ type: NavPageActions.SET_NAV_PAGE, page: page });
  }
}
