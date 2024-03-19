import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SistemaNervosoPage } from './sistema-nervoso.page';

const routes: Routes = [
  {
    path: '',
    component: SistemaNervosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SistemaNervosoPageRoutingModule {}
