import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService, CartItem } from '../services/cart.service';  // Asegúrate de importar CartService y CartItem

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartItem[]>;

  constructor(private cartService: CartService) {
    this.cartItems$ = this.cartService.getItems();
  }

  ngOnInit() {}

  removeItem(itemId: string) {
    this.cartService.removeItem(itemId);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
