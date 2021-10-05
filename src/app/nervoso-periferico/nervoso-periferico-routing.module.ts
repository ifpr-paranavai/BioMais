import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NervosoPerifericoPage } from './nervoso-periferico.page';

const routes: Routes = [
  {
    path: '',
    component: NervosoPerifericoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NervosoPerifericoPageRoutingModule {}
