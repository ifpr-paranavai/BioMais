import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistritoSanguineoPage } from './distrito-sanguineo.page';

const routes: Routes = [
  {
    path: '',
    component: DistritoSanguineoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistritoSanguineoPageRoutingModule {}
