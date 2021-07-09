import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CirculatorioPageRoutingModule } from './circulatorio-routing.module';

import { CirculatorioPage } from './circulatorio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CirculatorioPageRoutingModule
  ],
  declarations: [CirculatorioPage]
})
export class CirculatorioPageModule {}
