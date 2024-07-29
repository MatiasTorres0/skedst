import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuestraHistoriaPageRoutingModule } from './nuestra-historia-routing.module';

import { NuestraHistoriaPage } from './nuestra-historia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuestraHistoriaPageRoutingModule
  ],
  declarations: [NuestraHistoriaPage]
})
export class NuestraHistoriaPageModule {}
