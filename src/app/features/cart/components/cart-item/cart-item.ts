import { Component, inject, input } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CartItem } from '../../../../models/cart-item';
import { CartService } from '../../../../core/services/cart';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css'
})
export class CartItemComponent {

  item = input.required<CartItem>();

  private cartService = inject(CartService);

  increase(): void {

    this.cartService.increaseQuantity(
      this.item().product.id
    );

  }

  decrease(): void {

    this.cartService.decreaseQuantity(
      this.item().product.id
    );

  }

  remove(): void {

    this.cartService.removeFromCart(
      this.item().product.id
    );

  }

}