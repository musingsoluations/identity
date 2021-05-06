import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import * as FromHttpState from '../../store/requestInProgress/state';
import * as FromHttpAction from '../../store/requestInProgress/actions';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService {

  constructor(private httpStore: Store<FromHttpState.HttpRequestState>) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.httpStore.dispatch(FromHttpAction.httpRequestStart({ status: true }));
    return new Observable((observer) => {
      const subscription = next.handle(req).subscribe(
        (event) => {
          if (event instanceof HttpResponse) {
            this.httpStore.dispatch(
              FromHttpAction.httpRequestSuccess({ status: false })
            );
            observer.next(event);
          }
        },
        (err: HttpErrorResponse) => {
          this.httpStore.dispatch(
            FromHttpAction.httpRequestFail({ status: false })
          );
          observer.error(err);
        },
        () => {
          this.httpStore.dispatch(
            FromHttpAction.httpRequestFail({ status: false })
          );
          observer.complete();
        }
      );
      // remove request from queue when cancelled
      return () => {
        this.httpStore.dispatch(
          FromHttpAction.httpRequestFail({ status: false })
        );
        subscription.unsubscribe();
      };
    });
  }
}
