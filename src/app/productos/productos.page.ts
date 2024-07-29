import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { CartService } from '../services/cart.service';
import { CartItem } from '../services/cart.service'; // Importa CartItem

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  productos$: Observable<any[]>; // Utilizamos el observable productos$
  searchControl: FormControl;
  productosCollection: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore, private cartService: CartService) {
    // Inicializamos el observable productos$ con los datos de Firestore
    this.productosCollection = this.firestore.collection('productos');
    this.productos$ = this.productosCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((change) => ({
          id: change.payload.doc.id, // Access the document ID here
          ...change.payload.doc.data(), // Spread the document data here
        }));
      })
    );

    // Inicializamos el FormControl
    this.searchControl = new FormControl('');
  }

  ngOnInit() {
    this.productos$.subscribe((productos) => {
      console.log('Productos:', productos);
    });
  }

  addToCart(producto: any) { // Declara el tipo del parámetro producto
    const cartItem: CartItem = {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio_oferta,
      cantidad: 1,
      imagen: producto.imagen1,
    };
    this.cartService.addItem(cartItem);
  }
}
