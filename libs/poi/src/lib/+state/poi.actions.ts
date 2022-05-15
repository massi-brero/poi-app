import { createAction, props } from '@ngrx/store';

import { PoiEntity } from './poi.models';

export const init = createAction('[Poi Page] Init')

export const loadPoiSuccess = createAction(
  '[Poi/API] Load Poi Success',
  props<{ pois: PoiEntity[] }>()
)

export const loadPoselectPoiiSuccess = createAction(
  '[Poi/API] Select Poi',
  props<{ poisId: string | number }>()
)

export const loadPoiFailure = createAction(
  '[Poi/API] Load Poi Failure',
  props<{ error: any }>()
)

export const selectPoi = createAction(
  '[Poi/API] Load Poi Failure',
  props<{ poiId: string | number }>()
)
export const visitPoi = createAction(
  '[Poi/API] Load Visit Poi',
  props<{ poiId: string | number }>()
)
