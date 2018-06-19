import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Hero } from '../hero';
import * as HeroActions from '../actions/hero.actions';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.css']
})
export class HeroCreateComponent implements OnInit {

  constructor( private store: Store<AppState>) {}

  addHero(name, userId) {
    this.store.dispatch(new HeroActions.AddHero({
      name: name,
      userId: userId
    }));
  }

  ngOnInit() {
  }

}
