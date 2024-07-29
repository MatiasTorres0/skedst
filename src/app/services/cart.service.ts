import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {  // Asegúrate de exportar CartItem
  id: string;
  nombre: string;
  precio: number;
  cantidad: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartItem[] = [];
  private itemsSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

  getItems() {
    return this.itemsSubject.asObservable();
  }

  addItem(item: CartItem) {
    const existingItem = this.items.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.cantidad += item.cantidad;
    } else {
      this.items.push(item);
    }
    this.itemsSubject.next(this.items);
  }

  removeItem(itemId: string) {
    this.items = this.items.filter(item => item.id !== itemId);
    this.itemsSubject.next(this.items);
  }

  clearCart() {
    this.items = [];
    this.itemsSubject.next(this.items);
  }
}
