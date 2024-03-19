import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SistemaNervosoPageRoutingModule } from './sistema-nervoso-routing.module';

import { SistemaNervosoPage } from './sistema-nervoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SistemaNervosoPageRoutingModule
  ],
  declarations: [SistemaNervosoPage]
})
export class SistemaNervosoPageModule {}
