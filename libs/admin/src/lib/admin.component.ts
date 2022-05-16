import { Component, OnDestroy, OnInit } from '@angular/core';
import { PoiActions, PoiEntity, PoiSelectors } from '@mbsoft/poi';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AdminService } from './admin.service';

@Component({
  selector: 'mbsoft-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined
  data:
    | {
        type: string
        labels: string[]
        datasets: [
          {
            label: string
            data: string[] | number[]
            backgroundColor?: string[]
          }
        ]
      }
    | undefined

  constructor(private store: Store, private adminService: AdminService) {}

  ngOnInit(): void {
    this.store.dispatch(PoiActions.init())
    this.store
      .select(PoiSelectors.getAllPoi)
      .subscribe((pois) => this.buildChart(pois))
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  private buildChart(pois: PoiEntity[]) {
    this.data = {
      type: 'pie',
      labels: pois.map((poi: PoiEntity) => poi.name),
      datasets: [
        {
          label: 'Poi Visits',
          data: this.adminService.getStatsForPois(pois),
        },
      ],
    }
  }
}
