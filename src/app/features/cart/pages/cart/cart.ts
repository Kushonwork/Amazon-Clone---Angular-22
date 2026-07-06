import { Component, inject } from '@angular/core';

import { CartService } from '../../../../core/services/cart';

import { CartItemComponent } from '../../components/cart-item/cart-item';
import { CartSummaryComponent } from '../../components/cart-summary/cart-summary';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CartItemComponent,
    CartSummaryComponent
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  cartService = inject(CartService);

}