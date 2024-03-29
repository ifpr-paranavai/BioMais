import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NervosoCentralPage } from './nervoso-central.page';
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
        component: NervosoCentralPage
      }
    ])
  ],
  declarations: [NervosoCentralPage, ExpandableComponent]
})
export class NervosoCentralPageModule {}
