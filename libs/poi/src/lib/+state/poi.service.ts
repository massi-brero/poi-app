import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PoiEntity } from './poi.models';

const VISIT_PREFIX = 'tour'

@Injectable({
  providedIn: 'root',
})
export class PoiService {
  constructor(private http: HttpClient) {}

  setPoiVisits(poiId: string | number) {
    const poiStorageName = `${VISIT_PREFIX}-${poiId}`
    const stat = localStorage.getItem(poiStorageName)
    const total = stat ? Number(stat) : 1
    localStorage.setItem(poiStorageName, total.toString())
  }
  getAll(): Observable<PoiEntity[]> {
    return this.http.get<PoiEntity[]>('assets/poi.json')
  }
}
