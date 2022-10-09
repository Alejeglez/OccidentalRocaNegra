import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DanosTuOpinionPageRoutingModule } from './danos-tu-opinion-routing.module';

import { DanosTuOpinionPage } from './danos-tu-opinion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DanosTuOpinionPageRoutingModule
  ],
  declarations: [DanosTuOpinionPage]
})
export class DanosTuOpinionPageModule {}
