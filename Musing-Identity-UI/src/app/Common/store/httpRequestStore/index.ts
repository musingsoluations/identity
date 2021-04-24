import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as FromState from './state';
import * as FromReducer from './reducers';

export interface State {
  app: FromState.HttpRequestState;
}

export const reducers: ActionReducerMap<State> = {
  app: FromReducer.reducer,
};

const httpRequestState = createFeatureSelector<FromState.HttpRequestState>(
  'app'
);

export const getHttpState = createSelector(
  httpRequestState,
  (httpState) => httpState.isHttpRequestInProgress
);
