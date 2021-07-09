import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestaoMultiplaEscolhaPage } from './questao-multipla-escolha.page';

const routes: Routes = [
  {
    path: '',
    component: QuestaoMultiplaEscolhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestaoMultiplaEscolhaPageRoutingModule {}
