import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaringePage } from './faringe.page';

const routes: Routes = [
  {
    path: '',
    component: FaringePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaringePageRoutingModule {}
