import { Action, createSelector } from '@ngrx/store'
import * as AppActions from '../actions/app.actions'
import { BehaviorSubject } from 'rxjs';
import { AppState } from '../app.state';

export interface IAppMetaState {
    isOnline : boolean
}

const initialState : IAppMetaState = {
    isOnline : window.navigator.onLine
};

export function appMetaReducer(state: IAppMetaState = initialState, action: AppActions.NetworkEvent) {
    switch(action.type) {
        case AppActions.APP_NETWORK_EVENT:
            return Object.assign({}, state, { isOnline: action.payload });
        default:
            return state;
    }
}

export const selectAppMetaState = (state: AppState) => state.appMetaState;

export const selectIsOnline = createSelector(
    selectAppMetaState,
    (state: IAppMetaState) => state.isOnline
)