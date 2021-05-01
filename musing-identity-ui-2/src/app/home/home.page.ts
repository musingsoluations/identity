import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import * as FromRequestInProgressState from '../common/store/requestInProgress/state';
import * as FromRequestInProgressAction from '../common/store/requestInProgress/actions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private httpStore: Store<FromRequestInProgressState.HttpRequestState>) { }


  showLoader(): void {
    console.log('test');
    this.httpStore.dispatch(FromRequestInProgressAction.httpRequestStart({ status: true }));
  }

  hideLoader(): void {
    console.log('test');
    this.httpStore.dispatch(FromRequestInProgressAction.httpRequestSuccess({ status: false }));
  }

}
