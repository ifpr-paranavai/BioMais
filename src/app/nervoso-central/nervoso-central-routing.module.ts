import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NervosoCentralPage } from './nervoso-central.page';

const routes: Routes = [
  {
    path: '',
    component: NervosoCentralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NervosoCentralPageRoutingModule {}
