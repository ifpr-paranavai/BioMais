import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratorioPage } from './respiratorio.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratorioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratorioPageRoutingModule {}
