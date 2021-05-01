import { createReducer, on, Action } from '@ngrx/store';
import { HttpRequestState, initialState } from './state';
import * as HttpStateActions from './actions';

const httpRequestStatus = createReducer(
  initialState,
  on(HttpStateActions.httpRequestStart, (requestState, { status }) => ({
    ...requestState,
    isHttpRequestInProgress: status,
  })),
  on(HttpStateActions.httpRequestSuccess, (requestState, { status }) => ({
    ...requestState,
    isHttpRequestInProgress: status,
  })),
  on(HttpStateActions.httpRequestFail, (requestState, { status }) => ({
    ...requestState,
    isHttpRequestInProgress: status,
  }))
);

export const reducer = (state: HttpRequestState | undefined, action: Action) => httpRequestStatus(state, action);
