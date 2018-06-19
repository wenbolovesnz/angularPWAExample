import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { IHeroState } from '../reducers/hero.reducer';

import * as HeroActions from '../actions/hero.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  currentHero: Hero = null;
  
  heroState$:Observable<IHeroState>;

  constructor(private heroService: HeroService, private store: Store<any>) {
    this.heroState$ = store.select('heroes');
  }

  ngOnInit() {
    this.store.dispatch(new HeroActions.LoadHeroes())
  }

}
