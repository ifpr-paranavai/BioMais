import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { IonicModule } from '@ionic/angular';

import { ExpandableComponent } from '../components/expandable/expandable.component';

import { FecundacaoContracepcaoPage } from './fecundacao-contracepcao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: FecundacaoContracepcaoPage
      }
    ])
  ],
  declarations: [FecundacaoContracepcaoPage, ExpandableComponent]
})
export class FecundacaoContracepcaoPageModule {}
