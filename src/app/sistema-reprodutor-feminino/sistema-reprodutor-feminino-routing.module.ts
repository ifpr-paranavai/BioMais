import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SistemaReprodutorFemininoPage } from './sistema-reprodutor-feminino.page';

const routes: Routes = [
  {
    path: '',
    component: SistemaReprodutorFemininoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SistemaReprodutorFemininoPageRoutingModule {}
