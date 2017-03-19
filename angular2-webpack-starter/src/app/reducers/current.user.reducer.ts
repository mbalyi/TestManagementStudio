import { AppActions } from '../app.actions';
import { CurrentUserAction, CurrentUserActions } from './../actions/current.user.actions';
import { IPayloadAction } from './utils/payload-action';
import { User } from './../api/index';

const INITIAL_STATE: User = {
    id: null,
    password: null,
    lastName: "",
    firstName: "",
    email: "",
    roles: [],
    permissions: []
};

export function currentUserReducer( state: User = INITIAL_STATE, action: CurrentUserAction = null): User {
    if (!action) return state;

    switch (action.type) {
        case CurrentUserActions.SET_CURRENT_USER:
            state = action.currentUser;
            return state;
        default: return state;
    }
}
