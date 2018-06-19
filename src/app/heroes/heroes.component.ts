import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

import * as HeroActions from '../actions/hero.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  currentHero: Hero = null;
  heroes: Hero[] = [];

  newHeroes: Observable<Hero[]>;

  constructor(private heroService: HeroService, private store: Store<AppState>) {
    this.newHeroes = store.select('heroes');
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
      });
  }

  ngOnInit() {
    this.store.dispatch(new HeroActions.LoadHeroes())
  }

}
