import { Injectable } from '@angular/core';
import { PoiEntity } from '@mbsoft/poi';

const VISIT_PREFIX = 'tour'

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  getStatsForPoi(pois: PoiEntity[]): number[] {
    return pois.map((poi: PoiEntity) => {
      const poiStorageName = `${VISIT_PREFIX}-${poi.id}`
      const stat = localStorage.getItem(poiStorageName) ?? 0

      return +stat
    })
  }
}
