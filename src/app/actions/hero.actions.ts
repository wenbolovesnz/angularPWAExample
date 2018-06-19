// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Hero } from '../hero'

// Section 2
export const ADD_HERO       = '[HERO] Add'
export const REMOVE_HERO   = '[HERO] Remove'
export const LOAD_HEROES = '[HERO] Load'
export const LOADED_HEROES = '[HERO] Loaded'
export const LOAD_HEROES_FAILED = '[HERO] Load Failed'

// Section 3
export class AddHero implements Action {
    readonly type = ADD_HERO

    constructor(public payload: Hero) {}
}

export class RemoveHero implements Action {
    readonly type = REMOVE_HERO

    constructor(public payload: number) {}
}

export class LoadHeroes implements Action {
    readonly type = LOAD_HEROES
    constructor() {}
}

export class LoadedHeroes implements Action {
    readonly type = LOADED_HEROES

    constructor(public payload: Hero[]) {}
}

export class LoadHeroesFailed implements Action {
    readonly type = LOAD_HEROES_FAILED

    constructor(public payload: any) {}
}

// Section 4
export type Actions = AddHero | RemoveHero | LoadHeroes | LoadedHeroes | LoadHeroesFailed