import { AppActions } from '../app.actions';
import { NavPageAction, NavPageActions } from './../actions/navheader.actions';
import { IPayloadAction } from './utils/payload-action';
import { NavContext, NavPages, NavHeaderContext } from './../components/navheader/navheader.context';

const INITIAL_STATE: NavContext = {
    page: NavPages.login,
    menuItems: null
};

export function navHeaderReducer( state: NavContext = INITIAL_STATE, action: NavPageAction = null): NavContext {
    if (!action) return state;
    
    switch (action.type) {
        case NavPageActions.SET_NAV_PAGE:
            state = action;
            return state;
        default: return state;
    }
}
