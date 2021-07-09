import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstomagoPageRoutingModule } from './estomago-routing.module';

import { EstomagoPage } from './estomago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstomagoPageRoutingModule
  ],
  declarations: [EstomagoPage]
})
export class EstomagoPageModule {}
