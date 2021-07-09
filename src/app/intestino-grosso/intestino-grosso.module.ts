import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntestinoGrossoPageRoutingModule } from './intestino-grosso-routing.module';

import { IntestinoGrossoPage } from './intestino-grosso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntestinoGrossoPageRoutingModule
  ],
  declarations: [IntestinoGrossoPage]
})
export class IntestinoGrossoPageModule {}
