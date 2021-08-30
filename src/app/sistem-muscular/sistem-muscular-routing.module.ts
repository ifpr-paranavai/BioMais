import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SistemMuscularPage } from './sistem-muscular.page';

const routes: Routes = [
  {
    path: '',
    component: SistemMuscularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SistemMuscularPageRoutingModule {}
