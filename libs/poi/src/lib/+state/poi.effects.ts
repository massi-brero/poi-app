import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { EMPTY, map } from 'rxjs';

import * as PoiActions from './poi.actions';
import { PoiEntity } from './poi.models';
import { PoiService } from './poi.service';

@Injectable()
export class PoiEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PoiActions.init),
      fetch({
        run: () => {
          return this.poiService
            .getAll()
            .pipe(
              map((pois: PoiEntity[]) =>
                PoiActions.loadPoiSuccess({ pois: pois })
              )
            )
        },
        onError: (_, error) => {
          console.error('Error', error)
          return PoiActions.loadPoiFailure({ error })
        },
      })
    )
  )

  visit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PoiActions.visitPoi),
      fetch({
        run: (action) => {
          this.poiService.setPoiVisits(action.poiId)
          return EMPTY
        },
      })
    )
  )

  constructor(
    private readonly actions$: Actions,
    private poiService: PoiService
  ) {}
}
