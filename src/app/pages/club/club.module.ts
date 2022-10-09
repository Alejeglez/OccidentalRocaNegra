import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubPageRoutingModule } from './club-routing.module';

import { ClubPage } from './club.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ClubPage]
})
export class ClubPageModule {}

