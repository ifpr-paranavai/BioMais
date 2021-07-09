import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { DigestorioPage } from "./digestorio.page";
import { ExpandableComponent } from "../components/expandable/expandable.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: DigestorioPage
      }
    ])
  ],
  declarations: [DigestorioPage, ExpandableComponent]
})
export class DigestorioPageModule {}