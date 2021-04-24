import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as FromHttpState from '../store/httpRequestStore/state';
import { Observable } from 'rxjs';
import * as FromHttpAction from '../store/httpRequestStore/actions';

@Injectable({
  providedIn: 'root',
})
export class LoaderInterceptorService implements HttpInterceptor {
  constructor(private httpStore: Store<FromHttpState.HttpRequestState>) {}

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
          if (err.status === 400) {
            let validationError: any;
            let validationErrors: any;
            if(!err.error.errors){
              validationError= err.error;
            }
            else {
              validationErrors = err.error.errors;
            }
            if(validationError) {
              Object.values(validationError).forEach((prop:any) => {
                alert(prop.description);
              })
            }else if (validationErrors){
              Object.values(validationErrors).forEach((prop:any) => {
                alert(prop);
              })
            }
            else {
              console.warn(err);
            }
          }
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
