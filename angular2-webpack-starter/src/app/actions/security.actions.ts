import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './../reducers/store/app.state';

export interface SecurityAction extends Action {
    sharelink: boolean;
    status: string;
    id: number;
}

@Injectable()
export class SecurityActions {
  static readonly SET_SECURITY = 'SET_SECURITY';
  static readonly DROP_SECURITY = 'DROP_SECURITY';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  setSecurity(sharelink: boolean, status: string, id: number) {
    this.ngRedux.dispatch({ type: SecurityActions.SET_SECURITY, sharelink: sharelink, status: status, id: id });
  }

  dropSecurity() {
    this.ngRedux.dispatch({ type: SecurityActions.DROP_SECURITY });
  }
}
