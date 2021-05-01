import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import * as FromRequestInProgressState from './common/store/requestInProgress/state';
import * as FromRequestInProgressAction from './common/store/requestInProgress/index';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  requestState$ = new Observable<boolean>();

  constructor(private httpStore: Store<FromRequestInProgressState.HttpRequestState>) { }
  ngOnInit(): void {
    this.requestState$ = this.httpStore.select(FromRequestInProgressAction.getHttpState);
  }
}
