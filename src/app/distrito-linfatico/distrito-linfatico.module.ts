import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DistritoLinfaticoPageRoutingModule } from './distrito-linfatico-routing.module';
import { RouterModule } from "@angular/router";

import { DistritoLinfaticoPage } from './distrito-linfatico.page';
import { ExpandableComponent } from '../components/expandable/expandable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: DistritoLinfaticoPage
      }
    ])
  ],
  declarations: [DistritoLinfaticoPage, ExpandableComponent]
})
export class DistritoLinfaticoPageModule {}
