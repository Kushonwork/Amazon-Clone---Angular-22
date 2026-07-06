import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { Product } from '../../../../models/product';
import { ProductService } from '../../../../core/services/product';
import { CartService } from '../../../../core/services/cart';
import { AuthService } from '../../../../core/services/auth';
import { Router } from '@angular/router';
interface Offer{

  title:string;

  description:string;

}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
    RouterLink
  ],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {
  
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  private cdr = inject(ChangeDetectorRef);
  private authService = inject(AuthService);
  private router = inject(Router);
  product: Product | undefined;
  relatedProducts: Product[] = [];
  selectedImage = '';

  thumbnails = [1, 2, 3, 4];

  quantity = 1;

  reviewCount = Math.floor(Math.random() * 2500) + 500;

  prime = true;

  amazonChoice = true;

  features = [

    {
      icon: 'local_shipping',
      title: 'FREE Delivery'
    },

    {
      icon: 'verified',
      title: '1 Year Warranty'
    },

    {
      icon: 'currency_rupee',
      title: 'Pay on Delivery'
    },

    {
      icon: 'autorenew',
      title: 'Easy Returns'
    }

  ];

  offers: Offer[] = [

  {

    title:'No Cost EMI',

    description:'Avail No Cost EMI on select credit cards.'

  },

  {

    title:'Cashback',

    description:'Get 5% cashback using Amazon Pay ICICI Card.'

  },

  {

    title:'Bank Offer',

    description:'Save ₹1500 on selected bank cards.'

  },

  {

    title:'Partner Offer',

    description:'GST invoice available for business purchases.'

  }

];

  ngOnInit(): void {

  const id = this.route.snapshot.paramMap.get('id');

  if (!id) return;

  this.productService.getProduct(id).subscribe({

    next: (res) => {

      this.product = res;

      this.selectedImage = res.image;

      // 👇 ADD THIS BLOCK HERE
      this.productService.getProducts().subscribe(products => {

        this.relatedProducts = products
          .filter(p => p.id !== this.product?.id)
          .slice(0, 4);

      });

      this.cdr.detectChanges();

    },

    error: (err) => {

      console.error(err);

    }

  });

}
  stars(): number[] {

    if (!this.product) return [];

    return Array.from(
      { length: this.product.ratings },
      (_, i) => i
    );

  }

  originalPrice(): number {

    if (!this.product) return 0;

    return Math.round(this.product.price * 1.25);

  }

  discount(): number {

    if (!this.product) return 0;

    return Math.round(

      (
        (this.originalPrice() - this.product.price)

        / this.originalPrice()

      ) * 100

    );

  }

  changeImage(image:string){

    this.selectedImage = image;

  }

  addToBasket() {

      if (!this.authService.isLoggedIn()) {

          this.router.navigate(['/login']);
          return;

      }

      if (!this.product) return;

      this.cartService.addToCart(this.product);

  }
}
