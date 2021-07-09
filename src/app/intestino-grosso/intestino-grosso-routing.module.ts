import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntestinoGrossoPage } from './intestino-grosso.page';

const routes: Routes = [
  {
    path: '',
    component: IntestinoGrossoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntestinoGrossoPageRoutingModule {}
