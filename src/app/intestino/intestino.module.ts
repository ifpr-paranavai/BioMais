import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntestinoPageRoutingModule } from './intestino-routing.module';

import { IntestinoPage } from './intestino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntestinoPageRoutingModule
  ],
  declarations: [IntestinoPage]
})
export class IntestinoPageModule {}
