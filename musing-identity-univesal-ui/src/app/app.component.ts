import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as FromHttpState from './Common/store/httpRequestStore/state'
import * as FromHttpAction from './Common/store/httpRequestStore/index';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  requestState$ = new Observable<boolean>();

  constructor(private httpStore: Store<FromHttpState.HttpRequestState>) { }


  ngOnInit(): void {
    this.requestState$ = this.httpStore.select(FromHttpAction.getHttpState);
  }
}
