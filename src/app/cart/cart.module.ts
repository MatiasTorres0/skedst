import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  // Asegúrate de importar IonicModule
  ],
  declarations: [CartComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Agrega CUSTOM_ELEMENTS_SCHEMA
})
export class CartModule {}
