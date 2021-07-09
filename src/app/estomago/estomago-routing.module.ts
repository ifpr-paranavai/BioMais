import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstomagoPage } from './estomago.page';

const routes: Routes = [
  {
    path: '',
    component: EstomagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstomagoPageRoutingModule {}
