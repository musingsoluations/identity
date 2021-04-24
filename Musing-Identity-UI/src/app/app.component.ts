import { Component, OnInit } from "@angular/core";
import { Store } from '@ngrx/store';
import * as FromHttpState from './Common/store/httpRequestStore/state'
import * as FromHttpAction from './Common/store/httpRequestStore/index';
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Musing-Identity-UI';
  constructor(private httpStore: Store<FromHttpState.HttpRequestState>) {}

  requestState$ = new Observable<boolean>();

  ngOnInit(): void {
    this.requestState$ = this.httpStore.select(FromHttpAction.getHttpState);
  }
}
