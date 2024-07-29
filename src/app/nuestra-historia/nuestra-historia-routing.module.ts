import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuestraHistoriaPage } from './nuestra-historia.page';

const routes: Routes = [
  {
    path: '',
    component: NuestraHistoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuestraHistoriaPageRoutingModule {}
