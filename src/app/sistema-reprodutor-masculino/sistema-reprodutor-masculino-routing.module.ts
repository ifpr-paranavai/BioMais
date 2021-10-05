import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SistemaReprodutorMasculinoPage } from './sistema-reprodutor-masculino.page';

const routes: Routes = [
  {
    path: '',
    component: SistemaReprodutorMasculinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SistemaReprodutorMasculinoPageRoutingModule {}
