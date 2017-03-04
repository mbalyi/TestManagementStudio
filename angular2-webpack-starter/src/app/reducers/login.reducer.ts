import { AppActions } from '../app.actions';
import { LoginAction, LoginActions } from './../actions/login.actions';
import { IPayloadAction } from './utils/payload-action';

export interface IsLogin {
  isLogin: boolean;
  loading: boolean;
  error?: any;
}

const INITIAL_STATE: IsLogin = {
  isLogin: false,
  loading: false,
  error: null,
};

export function loginReducer( state: IsLogin = INITIAL_STATE, action: LoginAction = null): IsLogin {
    if (!action) return state;

    switch (action.type) {
        case LoginActions.LOG_IN:
            debugger
            state.isLogin = true;
            return state;
        case LoginActions.LOG_OUT:
            state.isLogin = false;
            return state;
        default: return state;
    }
}
