import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UrinarioPageRoutingModule } from './urinario-routing.module';

import { UrinarioPage } from './urinario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UrinarioPageRoutingModule
  ],
  declarations: [UrinarioPage]
})
export class UrinarioPageModule {}
