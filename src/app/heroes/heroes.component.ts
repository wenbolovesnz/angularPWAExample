import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { IHeroState, selectHeroes, selectLoading } from '../reducers/hero.reducer';

import * as HeroActions from '../actions/hero.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  currentHero: Hero = null;
  heroState$:Observable<IHeroState>;
  heroes$: Observable<Hero[]>;
  loading$: Observable<boolean>;
  
  constructor(private store: Store<AppState>) {
    this.loading$ = store.select(selectLoading);
    this.heroes$ = store.select(selectHeroes);
  }

  ngOnInit() {
    this.store.dispatch(new HeroActions.LoadHeroes())
  }

}
