import {
  Component,
  inject,
  OnInit
} from '@angular/core';

import { ProductGrid } from '../../components/product-grid/product-grid';
import { HeroSlider } from '../../../../shared/components/hero-slider/hero-slider';
import { ProductService } from '../../../../core/services/product';
import { ShoppingCards } from '../../../../shared/components/shopping-cards/shopping-cards';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSlider,
    ProductGrid,
    ShoppingCards
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  productService = inject(ProductService);

  ngOnInit() {

    this.productService.loadProducts();

  }

}