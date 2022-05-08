import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PoiEntity } from './+state/poi.models';

@Injectable({
  providedIn: 'root',
})
export class PoiService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<PoiEntity[]> {
    return this.http.get<PoiEntity[]>('assets/poi.json');
  }
}
