import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReprodutorPageRoutingModule } from './reprodutor-routing.module';

import { ReprodutorPage } from './reprodutor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReprodutorPageRoutingModule
  ],
  declarations: [ReprodutorPage]
})
export class ReprodutorPageModule {}
