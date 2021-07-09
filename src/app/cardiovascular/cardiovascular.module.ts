import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardiovascularPageRoutingModule } from './cardiovascular-routing.module';

import { CardiovascularPage } from './cardiovascular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardiovascularPageRoutingModule
  ],
  declarations: [CardiovascularPage]
})
export class CardiovascularPageModule {}
