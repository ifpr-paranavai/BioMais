import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestaoMultiplaEscolhaPageRoutingModule } from './questao-multipla-escolha-routing.module';

import { QuestaoMultiplaEscolhaPage } from './questao-multipla-escolha.page';
import { Tab1Page } from '../tab1/tab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestaoMultiplaEscolhaPageRoutingModule,
    Tab1Page
  ],
  declarations: [QuestaoMultiplaEscolhaPage]
})
export class QuestaoMultiplaEscolhaPageModule {}
