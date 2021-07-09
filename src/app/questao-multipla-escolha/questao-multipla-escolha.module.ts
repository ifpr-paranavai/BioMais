import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestaoMultiplaEscolhaPageRoutingModule } from './questao-multipla-escolha-routing.module';

import { QuestaoMultiplaEscolhaPage } from './questao-multipla-escolha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestaoMultiplaEscolhaPageRoutingModule
  ],
  declarations: [QuestaoMultiplaEscolhaPage]
})
export class QuestaoMultiplaEscolhaPageModule {}
