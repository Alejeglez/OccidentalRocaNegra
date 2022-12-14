import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReservarPageRoutingModule } from './reservar-routing.module';
import { ReservarPage } from './reservar.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReservarPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ReservarPage]
})
export class ReservarPageModule {}
