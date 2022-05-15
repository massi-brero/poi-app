import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoiModule } from '@mbsoft/poi';
import { NgChartsModule } from 'ng2-charts';

import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
      },
    ]),
    PoiModule,
    NgChartsModule,
  ],
  declarations: [AdminComponent],
})
export class AdminModule {}
