import { Component, OnInit } from '@angular/core';
import { PoiActions, PoiEntity, PoiSelectors } from '@mbsoft/poi';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'mbsoft-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrls: ['./poi-list.component.css'],
})
export class PoiListComponent implements OnInit {
  public pois$: Observable<PoiEntity[]> | undefined;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.pois$ = this.store.select(PoiSelectors.getAllPoi);
    this.store.dispatch(PoiActions.init());
  }

  selectPoi(poi: PoiEntity) {
    this.store.dispatch(PoiActions.selectPoi({ poiId: poi.id }));
  }
}
