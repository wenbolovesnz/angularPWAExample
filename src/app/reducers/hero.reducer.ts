import { Action, createSelector } from '@ngrx/store'
import { Hero } from '../hero';
import { AppState } from '../app.state';
import * as HeroActions from '../actions/hero.actions'


export interface IHeroState {
    heroes: Hero[],
    loading: boolean
}

// Section 1
const initialState : IHeroState = {
    heroes : [],
    loading: false
};

// Section 2
export function reducer(state: IHeroState = initialState, action: HeroActions.Actions) {

    // Section 3
    switch(action.type) {
        case HeroActions.ADD_HERO:
            return Object.assign({}, state, { heroes: [...state.heroes, action.payload]});
        case HeroActions.LOADED_HEROES:
            return Object.assign({}, state, { loading: false, heroes: [...action.payload]});
        case HeroActions.LOAD_HEROES:
            return Object.assign({}, state, { loading: true} );  
        default:
            return state;
    }
}

export const selectHeroState = (state: AppState) => state.heroState;

export const selectHeroes = createSelector(
    selectHeroState,
    (state: IHeroState) => state.heroes
)

export const selectLoading = createSelector(
    selectHeroState,
    (state: IHeroState) => state.loading
)
