import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistritoLinfaticoPage } from './distrito-linfatico.page';

const routes: Routes = [
  {
    path: '',
    component: DistritoLinfaticoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistritoLinfaticoPageRoutingModule {}
