import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrinarioPage } from './urinario.page';

const routes: Routes = [
  {
    path: '',
    component: UrinarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrinarioPageRoutingModule {}
