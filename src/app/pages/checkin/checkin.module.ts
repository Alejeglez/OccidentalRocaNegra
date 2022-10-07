import { NgModule } from '@angular/core';
import { CheckinPageRoutingModule } from './checkin-routing.module';
import { CheckinPage } from './checkin.page';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CheckinPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CheckinPage]
})

export class CheckinPageModule {}
