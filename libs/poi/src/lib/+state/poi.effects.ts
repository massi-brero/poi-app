import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs';

import { PoiService } from '../poi.service';
import * as PoiActions from './poi.actions';
import { PoiEntity } from './poi.models';

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
            );
        },
        onError: (_, error) => {
          console.error('Error', error);
          return PoiActions.loadPoiFailure({ error });
        },
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private poiService: PoiService
  ) {}
}
