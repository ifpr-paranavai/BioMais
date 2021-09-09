import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { IonicModule } from '@ionic/angular';

import { SistemaEndocrinoPage } from './sistema-endocrino.page';
import { ExpandableComponent } from "../components/expandable/expandable.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: SistemaEndocrinoPage
      }
    ])
  ],
  declarations: [SistemaEndocrinoPage, ExpandableComponent]
})
export class SistemaEndocrinoPageModule {}
