import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from "@angular/router";

import { SistemMuscularPage } from './sistem-muscular.page';
import { ExpandableComponent } from "../components/expandable/expandable.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: SistemMuscularPage
      }
    ])
  ],
  declarations: [SistemMuscularPage, ExpandableComponent]
})
export class SistemMuscularPageModule {}
