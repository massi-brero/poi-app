import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { PoiModule } from '@mbsoft/poi';

import { MapComponent } from './map/map.component';
import { PoiListComponent } from './poi-list/poi-list.component';
import { VisitorComponent } from './visitor.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    PoiModule,
    GoogleMapsModule,
    RouterModule.forChild([
      {
        path: '',
        component: VisitorComponent,
      },
    ]),
  ],
  declarations: [VisitorComponent, PoiListComponent, MapComponent],
})
export class VisitorModule {}
