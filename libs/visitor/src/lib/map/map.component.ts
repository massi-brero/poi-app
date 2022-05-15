import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { PoiActions, PoiEntity, PoiSelectors } from '@mbsoft/poi';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'mbsoft-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  private infoOpen = false

  poi$: Observable<PoiEntity | undefined> | undefined
  @ViewChild(MapInfoWindow) info: MapInfoWindow | undefined

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.poi$ = this.store.select(PoiSelectors.getSelected)
    this.poi$.subscribe(() => {
      this.closeInfo()
    })
  }

  showInfo(marker: MapMarker, poiId: string | number) {
    this.store.dispatch(PoiActions.visitPoi({ poiId }))
    if (!this.infoOpen) {
      this.openInfo(marker)
    } else {
      this.closeInfo()
    }
  }

  private closeInfo() {
    this.info?.close()
    this.infoOpen = false
  }

  private openInfo(marker: MapMarker) {
    this.info?.open(marker)
    this.infoOpen = true
  }
}
