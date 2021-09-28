import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SistemaEsqueleticoPage } from './sistema-esqueletico.page';
import { RouterModule } from '@angular/router';
import { ExpandableComponent } from '../components/expandable/expandable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: SistemaEsqueleticoPage
      }
    ])
  ],
  declarations: [SistemaEsqueleticoPage, ExpandableComponent]
})
export class SistemaEsqueleticoPageModule {}