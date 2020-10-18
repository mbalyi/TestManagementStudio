import { AppActions } from '../app.actions';
import { SecurityAction, SecurityActions } from './../actions/security.actions';
import { IPayloadAction } from './utils/payload-action';
import { Message } from 'primeng/primeng';

export interface Security {
  shareLink?: boolean;
  status?: string;
  id?: number;
}

const INITIAL_STATE: Security = {
    shareLink: false,
    status: null,
    id: null
};

export function securityReducer( state: Security = INITIAL_STATE, action: SecurityAction = null): Security {
    if (!action) return state;

    switch (action.type) {
        case SecurityActions.SET_SECURITY:
            state = { shareLink: action.sharelink, status: action.status, id: action.id };
            return state;
        case SecurityActions.DROP_SECURITY:
            state = {shareLink: false, status: null, id: null};
            return state;
        default: return state;
    }
}
