import { Component, input } from '@angular/core';

import { Product } from '../../../../models/product';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [
    ProductCard
  ],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css'
})
export class ProductGrid {

  products = input.required<Product[]>();

}