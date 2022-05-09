import { Component, OnInit } from '@angular/core';
import { PoiEntity, PoiSelectors } from '@mbsoft/poi';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'mbsoft-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  poi$: Observable<PoiEntity | undefined> | undefined;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.poi$ = this.store.select(PoiSelectors.getSelected);
  }
}
