import { Component, OnDestroy, OnInit } from '@angular/core';
import { PoiActions, PoiSelectors } from '@mbsoft/poi';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mbsoft-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(PoiActions.init())
    this.store.select(PoiSelectors.getAllPoi).subscribe()
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
