import { Hero } from './hero';
import { IHeroState } from './reducers/hero.reducer';
import { IAppMetaState } from './reducers/app.reducer';

export interface AppState {
  readonly heroState: IHeroState;
  readonly appMetaState: IAppMetaState;
}