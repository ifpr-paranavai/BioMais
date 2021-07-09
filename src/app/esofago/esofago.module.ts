import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsofagoPageRoutingModule } from './esofago-routing.module';

import { EsofagoPage } from './esofago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsofagoPageRoutingModule
  ],
  declarations: [EsofagoPage]
})
export class EsofagoPageModule {}
