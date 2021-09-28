import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SentidosPage } from './sentidos.page';

const routes: Routes = [
  {
    path: '',
    component: SentidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SentidosPageRoutingModule {}
