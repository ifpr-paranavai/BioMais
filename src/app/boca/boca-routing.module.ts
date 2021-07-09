import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BocaPage } from './boca.page';

const routes: Routes = [
  {
    path: '',
    component: BocaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BocaPageRoutingModule {}
