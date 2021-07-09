import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaringePageRoutingModule } from './faringe-routing.module';

import { FaringePage } from './faringe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaringePageRoutingModule
  ],
  declarations: [FaringePage]
})
export class FaringePageModule {}
