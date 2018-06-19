import { Injectable } from '@angular/core'

import { Effect, Actions } from '@ngrx/effects'
import { of } from 'rxjs'
import { map, catchError, switchMap } from 'rxjs/operators'

import * as heroesActions from '../actions/hero.actions'
import * as heroesService from '../hero.service';

@Injectable()
export class HeroEffects {
    constructor(
        private action$: Actions,
        private service: heroesService.HeroService
    ){}

    @Effect()
    loadHeroes$ = this.action$.ofType(heroesActions.LOAD_HEROES).pipe(
        switchMap(() => {
            return this.service.getHeroes().pipe(
                map( heroes => new heroesActions.LoadedHeroes(heroes)),
                catchError( error => of(new heroesActions.LoadHeroesFailed(error)))
            )
        })
    )
}