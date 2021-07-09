import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratorioPageRoutingModule } from './respiratorio-routing.module';

import { RespiratorioPage } from './respiratorio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratorioPageRoutingModule
  ],
  declarations: [RespiratorioPage]
})
export class RespiratorioPageModule {}
