import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BocaPageRoutingModule } from './boca-routing.module';

import { BocaPage } from './boca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BocaPageRoutingModule
  ],
  declarations: [BocaPage]
})
export class BocaPageModule {}
