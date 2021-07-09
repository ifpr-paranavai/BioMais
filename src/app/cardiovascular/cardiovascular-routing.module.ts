import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardiovascularPage } from './cardiovascular.page';

const routes: Routes = [
  {
    path: '',
    component: CardiovascularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardiovascularPageRoutingModule {}
