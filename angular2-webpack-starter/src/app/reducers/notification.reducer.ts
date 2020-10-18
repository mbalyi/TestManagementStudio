import { AppActions } from '../app.actions';
import { NotificationAction, NotificationActions } from './../actions/notification.actions';
import { IPayloadAction } from './utils/payload-action';
import { Message } from 'primeng/primeng';

const INITIAL_STATE: Message[] = [];

export function notificationReducer( state: Message[] = INITIAL_STATE, action: NotificationAction = null): Message[] {
    if (!action) return state;

    switch (action.type) {
        case NotificationActions.SET_NOTIFICATION:
            state = [];
            let status = 'error';
            if (action.success == null) {
                status = 'info';
            } else if (action.success == true) {
                status = 'success';
            } else if (action.success == false) {
                status = 'error';
            }
            state.push({severity: status, summary: action.msg, detail: action.detail});
            return state;
        default: return state;
    }
}
