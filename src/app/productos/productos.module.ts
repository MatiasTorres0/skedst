import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductosPageRoutingModule } from './productos-routing.module';
import { ProductosPage } from './productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProductosPageRoutingModule
  ],
  declarations: [ProductosPage]
})
export class ProductosPageModule {}