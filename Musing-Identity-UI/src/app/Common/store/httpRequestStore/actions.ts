import { createAction, props } from '@ngrx/store';

export const httpRequestStart = createAction(
  '[Http Request] Start',
  props<{ status: boolean }>()
);
export const httpRequestSuccess = createAction(
  '[Http Request] Success',
  props<{ status: boolean }>()
);
export const httpRequestFail = createAction(
  '[Http Request] Fail',
  props<{ status: boolean }>()
);
