import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestaoParPageRoutingModule } from './questao-par-routing.module';

import { QuestaoParPage } from './questao-par.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestaoParPageRoutingModule
  ],
  declarations: [QuestaoParPage]
})
export class QuestaoParPageModule {}
