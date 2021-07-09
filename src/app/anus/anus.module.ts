import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnusPageRoutingModule } from './anus-routing.module';

import { AnusPage } from './anus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnusPageRoutingModule
  ],
  declarations: [AnusPage]
})
export class AnusPageModule {}
