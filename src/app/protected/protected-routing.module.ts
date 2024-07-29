import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProtectedPage } from './protected.page';

const routes: Routes = [
  {
    path: '',
    component: ProtectedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedPageRoutingModule {}
