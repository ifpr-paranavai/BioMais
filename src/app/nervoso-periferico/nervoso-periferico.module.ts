import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NervosoPerifericoPage } from './nervoso-periferico.page';
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
        component: NervosoPerifericoPage
      }
    ])
  ],
  declarations: [NervosoPerifericoPage, ExpandableComponent]
})
export class NervosoPerifericoPageModule {}
