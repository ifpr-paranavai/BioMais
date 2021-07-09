import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReprodutorPage } from './reprodutor.page';

const routes: Routes = [
  {
    path: '',
    component: ReprodutorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReprodutorPageRoutingModule {}
