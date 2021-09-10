import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbacknewPage } from './feedbacknew.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbacknewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbacknewPageRoutingModule {}
