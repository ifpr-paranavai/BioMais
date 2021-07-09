import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestaoParPage } from './questao-par.page';

const routes: Routes = [
  {
    path: '',
    component: QuestaoParPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestaoParPageRoutingModule {}
