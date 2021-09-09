import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SistemaEndocrinoPage } from './sistema-endocrino.page';

const routes: Routes = [
  {
    path: '',
    component: SistemaEndocrinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SistemaEndocrinoPageRoutingModule {}
