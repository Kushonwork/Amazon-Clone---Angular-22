import { Injectable, computed, effect, signal } from '@angular/core';

import { CartItem } from '../../models/cart-item';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly STORAGE_KEY = 'amazon-cart';

  private readonly _cart = signal<CartItem[]>(this.loadCart());

  readonly cart = this._cart.asReadonly();

  readonly cartCount = computed(() =>
    this._cart().reduce((total, item) => total + item.quantity, 0)
  );

  readonly totalPrice = computed(() =>
  Number(
    this._cart()
      .reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      )
      .toFixed(2)
  )
);

  constructor() {

    effect(() => {

      localStorage.setItem(
        this.STORAGE_KEY,
        JSON.stringify(this._cart())
      );

    });

  }

  private loadCart(): CartItem[] {

    const saved = localStorage.getItem(this.STORAGE_KEY);

    if (!saved) {

      return [];

    }

    try {

      return JSON.parse(saved);

    } catch {

      return [];

    }

  }

  addToCart(product: Product): void {

    const cart = [...this._cart()];

    const existing = cart.find(
      item => item.product.id === product.id
    );

    if (existing) {

      existing.quantity++;

    } else {

      cart.push({
        product,
        quantity: 1
      });

    }

    this._cart.set(cart);

  }

  removeFromCart(productId: string|number): void {

    this._cart.set(
      this._cart().filter(
        item => item.product.id !== productId
      )
    );

  }

  increaseQuantity(productId: string|number): void {

    const cart = [...this._cart()];

    const item = cart.find(
      i => i.product.id === productId
    );

    if (item) {

      item.quantity++;

      this._cart.set(cart);

    }

  }

  decreaseQuantity(productId: string|number): void {

    const cart = [...this._cart()];

    const item = cart.find(
      i => i.product.id === productId
    );

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {

      this.removeFromCart(productId);

      return;

    }

    this._cart.set(cart);

  }

  clearCart(): void {

    this._cart.set([]);

  }

}
