import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnusPage } from './anus.page';

const routes: Routes = [
  {
    path: '',
    component: AnusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnusPageRoutingModule {}
