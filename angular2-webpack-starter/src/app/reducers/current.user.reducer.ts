import { AppActions } from '../app.actions';
import { CurrentUserAction, CurrentUserActions } from './../actions/current.user.actions';
import { IPayloadAction } from './utils/payload-action';
import { Users } from './../models/users.model';

const INITIAL_STATE: Users = {
    userid: null,
    nickname: "",
    password: null,
    lastname: "",
    firstname: "",
    email: "",
    phone: "",
    address: "",
    roleid: null
};

export function currentUserReducer( state: Users = INITIAL_STATE, action: CurrentUserAction = null): Users {
    if (!action) return state;

    switch (action.type) {
        case CurrentUserActions.SET_CURRENT_USER:
            state = action.currentUser;
            return state;
        default: return state;
    }
}
