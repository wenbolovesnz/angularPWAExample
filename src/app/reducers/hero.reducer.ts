import { Action } from '@ngrx/store'
import { Hero } from '../hero';
import * as HeroActions from '../actions/hero.actions'

// Section 1
const initialState: Hero[] = [];

// Section 2
export function reducer(state: Hero[] = initialState, action: HeroActions.Actions) {

    // Section 3
    switch(action.type) {
        case HeroActions.ADD_HERO:
            return [...state, action.payload];
        case HeroActions.LOADED_HEROES:
            return [...action.payload];    
        default:
            return state;
    }
}