import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DanosTuOpinionPage } from './danos-tu-opinion.page';

const routes: Routes = [
  {
    path: '',
    component: DanosTuOpinionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DanosTuOpinionPageRoutingModule {}
