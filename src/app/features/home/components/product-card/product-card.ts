import {
  Component,
  computed,
  inject,
  input
} from '@angular/core';

import { Router } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { Product } from '../../../../models/product';

import { CartService } from '../../../../core/services/cart';
import { AuthService } from '../../../../core/services/auth';


@Component({
  selector: 'app-product-card',

  standalone: true,

  imports: [
    MatIconModule,
    MatButtonModule
  ],

  templateUrl: './product-card.html',

  styleUrl: './product-card.css'
})
export class ProductCard {

  product = input.required<Product>();


  private router = inject(Router);

  private cartService = inject(CartService);

  private authService = inject(AuthService);


  stars = computed(() => {

    return Array.from({
      length: this.product().ratings
    });

  });


  reviewCount = computed(() =>

    Math.floor(Math.random() * 900 + 100)

  );


  originalPrice = computed(() =>

    Math.round(
      this.product().price * 1.25
    )

  );


  discount = computed(() =>

    Math.round(

      (
        (
          this.originalPrice()
          -
          this.product().price
        )
        /
        this.originalPrice()
      )
      *
      100

    )

  );


  isPrime = computed(() =>

    Math.random() > 0.35

  );


  stock = computed(() =>

    Math.floor(
      Math.random() * 18 + 3
    )

  );


  limitedDeal = computed(() =>

    Math.random() > 0.5

  );


  addToBasket(): void {

    /*
     * User must login before adding
     * products to the cart.
     */

    if (!this.authService.isLoggedIn()) {

      this.router.navigate(['/login']);

      return;

    }


    this.cartService.addToCart(

      this.product()

    );

  }


  openProduct(): void {

    this.router.navigate([

      '/products',

      this.product().id

    ]);

  }

}