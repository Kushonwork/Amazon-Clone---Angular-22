import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart';
import { AuthService } from '../../core/services/auth';
import { ProductService } from '../../core/services/product';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    MatMenuTrigger
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  categories = [
  'Fresh',
  'MX Player',
  'Sell',
  'Best Sellers',
  "Today's Deals",
  'Prime',
  'Mobiles',
  'New Releases',
  'Customer Service',
  'Electronics',
  'Home & Kitchen',
  'Fashion',
  'Computers'
];

searchCategories = [
  'All',
  'Electronics',
  'Books',
  'Fashion',
  'Computers'
];

selectedCategory = 'All';

  cartService = inject(CartService);

  authService = inject(AuthService);

  productService = inject(ProductService);

  logout(){

  this.authService.logout();

}

}