import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbacknewPageRoutingModule } from './feedbacknew-routing.module';

import { FeedbacknewPage } from './feedbacknew.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbacknewPageRoutingModule
  ],
  declarations: [FeedbacknewPage]
})
export class FeedbacknewPageModule {}
