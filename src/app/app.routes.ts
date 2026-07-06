import { Routes } from '@angular/router';

import { Home } from './features/home/pages/home/home';
import { Login } from './features/auth/pages/login/login';
import { Register } from './features/auth/pages/register/register';
import { Cart } from './features/cart/pages/cart/cart';
import { Checkout } from './features/checkout/pages/checkout/checkout';
import { ProductDetails } from './features/products/pages/product-details/product-details';
import { authGuard } from './core/guards/auth-guard';
import {
  OrderSuccess
} from './features/orders/pages/order-success/order-success';
export const routes: Routes = [
  {
    path: 'order-success',
    component: OrderSuccess
  },
  {
    path: '',
    component: Home
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: 'cart',
    component: Cart,
    canActivate: [authGuard]
  },
  {
    path: 'checkout',
    component: Checkout,
    canActivate: [authGuard]
  },
  {
    path: 'products/:id',
    component: ProductDetails
  },
  {
    path: '**',
    redirectTo: ''
  }
];