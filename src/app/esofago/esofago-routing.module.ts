import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsofagoPage } from './esofago.page';

const routes: Routes = [
  {
    path: '',
    component: EsofagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsofagoPageRoutingModule {}
