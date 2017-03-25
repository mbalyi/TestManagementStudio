import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './../reducers/store/app.state';
import { Message } from 'primeng/primeng';

export interface NotificationAction extends Action {
    success: boolean; 
    msg: string;
    detail: string;
}

@Injectable()
export class NotificationActions {
  static readonly SET_NOTIFICATION = 'SET_NOTIFICATION';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  setNotification(success: boolean, msg: string, detail: string) {
    this.ngRedux.dispatch({ type: NotificationActions.SET_NOTIFICATION, success: success, msg: msg, detail: detail });
  }
}
