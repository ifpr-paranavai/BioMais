import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntestinoPage } from './intestino.page';

const routes: Routes = [
  {
    path: '',
    component: IntestinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntestinoPageRoutingModule {}
