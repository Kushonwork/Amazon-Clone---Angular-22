import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import {
  MatSnackBar,
  MatSnackBarModule
} from '@angular/material/snack-bar';

import { CartService } from '../../../../core/services/cart';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSnackBarModule
  ],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {

  private fb = inject(FormBuilder);

  private router = inject(Router);

  private snackBar = inject(MatSnackBar);

  cartService = inject(CartService);


  selectedPayment = 'cod';


  placingOrder = false;


  addressForm = this.fb.nonNullable.group({

    fullName: [
      '',
      Validators.required
    ],

    mobile: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/)
      ]
    ],

    pincode: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[0-9]{6}$/)
      ]
    ],

    address: [
      '',
      Validators.required
    ],

    city: [
      '',
      Validators.required
    ],

    state: [
      '',
      Validators.required
    ]

  });


  placeOrder(): void {

    /* ================================= */
    /* CHECK EMPTY CART */
    /* ================================= */

    if (this.cartService.cart().length === 0) {

      this.snackBar.open(
        'Your cart is empty',
        'Close',
        {
          duration: 3000
        }
      );

      this.router.navigate(['/cart']);

      return;

    }


    /* ================================= */
    /* CHECK ADDRESS FORM */
    /* ================================= */

    if (this.addressForm.invalid) {

      this.addressForm.markAllAsTouched();

      this.snackBar.open(
        'Please complete your delivery address',
        'Close',
        {
          duration: 3000
        }
      );

      return;

    }


    /* ================================= */
    /* CHECK PAYMENT */
    /* ================================= */

    if (!this.selectedPayment) {

      this.snackBar.open(
        'Please select a payment method',
        'Close',
        {
          duration: 3000
        }
      );

      return;

    }


    /* ================================= */
    /* PLACE ORDER */
    /* ================================= */

    this.placingOrder = true;


    /*
      We save the total BEFORE clearing the cart.

      Otherwise totalPrice() becomes 0 after clearCart().
    */

    const orderTotal =
      this.cartService.totalPrice();


    /*
      Save temporary order information.

      The success page will read this.
    */

    sessionStorage.setItem(
      'last-order',
      JSON.stringify({

        total: orderTotal,

        items:
          this.cartService.cartCount(),

        customer:
          this.addressForm.controls.fullName.value,

        payment:
          this.selectedPayment

      })
    );


    /*
      Simulate API request.

      Later this can be replaced by a real backend request.
    */

    setTimeout(() => {

      this.cartService.clearCart();


      this.snackBar.open(
        'Order placed successfully!',
        'Close',
        {
          duration: 2500
        }
      );


      this.router.navigate([
        '/order-success'
      ]);


      this.placingOrder = false;

    }, 1000);

  }

}