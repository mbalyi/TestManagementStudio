import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './../reducers/store/app.state';

import { NavPage, NavHeaderContext } from './../components/navheader/navheader.context';

import { CurrentPageService } from './../services/current.page.service';

export interface NavPageAction extends Action {
    page: NavPage,
    menuItems: NavHeaderContext[]
}

@Injectable()
export class NavPageActions {
  static readonly SET_NAV_PAGE = 'SET_NAV_PAGE';

  constructor(private ngRedux: NgRedux<IAppState>, private pageService: CurrentPageService) {}

  setPage(page : NavPage) {
    this.ngRedux.dispatch({ type: NavPageActions.SET_NAV_PAGE, page: page, menuItems: this.pageService.getMenuItems() });
  }
}
