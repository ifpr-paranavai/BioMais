import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DistritoSanguineoPageRoutingModule } from './distrito-sanguineo-routing.module';
import { RouterModule } from "@angular/router";

import { DistritoSanguineoPage } from './distrito-sanguineo.page';
import { ExpandableComponent } from '../components/expandable/expandable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: DistritoSanguineoPage
      }
    ])
  ],
  declarations: [DistritoSanguineoPage, ExpandableComponent]
})
export class DistritoSanguineoPageModule {}
