import { Hero } from './hero';
import { IHeroState } from './reducers/hero.reducer';

export interface AppState {
  readonly heroState: IHeroState;
}