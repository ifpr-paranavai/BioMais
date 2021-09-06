import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FecundacaoContracepcaoPage } from './fecundacao-contracepcao.page';

const routes: Routes = [
  {
    path: '',
    component: FecundacaoContracepcaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FecundacaoContracepcaoPageRoutingModule {}
