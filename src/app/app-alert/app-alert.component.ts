import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AppState } from '../app.state';
import { selectIsOnline } from '../reducers/app.reducer';
import { NetworkEvent } from '../actions/app.actions';
@Component({
  selector: 'app-alert',
  templateUrl: './app-alert.component.html',
  styleUrls: ['./app-alert.component.css']
})
export class AppAlertComponent implements OnInit {

  isOnline$: Observable<boolean>;

  constructor(private store: Store<AppState>) { 
    this.isOnline$ = store.select(selectIsOnline);
  }

  ngOnInit() {
    const updateOnlineStatus = (data) => {
      this.store.dispatch(new NetworkEvent(data.type === 'online'));
    }
    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
  }

}
