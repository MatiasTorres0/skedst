import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProtectedPageRoutingModule } from './protected-routing.module';

import { ProtectedPage } from './protected.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProtectedPageRoutingModule
  ],
  declarations: [ProtectedPage]
})
export class ProtectedPageModule {}
