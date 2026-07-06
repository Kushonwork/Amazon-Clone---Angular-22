import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CartService } from '../../../../core/services/cart';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css'
})
export class CartSummaryComponent {

  cartService = inject(CartService);

  private router = inject(Router);

  proceedToCheckout(): void {

    this.router.navigate(['/checkout']);

  }

}