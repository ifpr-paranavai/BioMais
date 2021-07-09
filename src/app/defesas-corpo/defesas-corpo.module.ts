import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DefesasCorpoPageRoutingModule } from './defesas-corpo-routing.module';
import { RouterModule } from "@angular/router";

import { DefesasCorpoPage } from './defesas-corpo.page';
import { ExpandableComponent } from '../components/expandable/expandable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: DefesasCorpoPage
      }
    ])
  ],
  declarations: [DefesasCorpoPage, ExpandableComponent]
})
export class DefesasCorpoPageModule {}
