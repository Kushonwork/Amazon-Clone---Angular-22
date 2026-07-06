import {
  Injectable,
  computed,
  inject,
  signal
} from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product';

import { API } from '../api/api.config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  products = signal<Product[]>([]);

  search = signal('');

  filteredProducts = computed(() => {

    const keyword =
      this.search().toLowerCase();

    return this.products().filter(product =>

      product.title
        .toLowerCase()
        .includes(keyword)

    );

  });

  loadProducts() {

    this.http
      .get<Product[]>(API.products)
      .subscribe(products => {

        this.products.set(products);

      });

  }
  getProductById(id: string) {

  return this.products().find(

    product => String(product.id) === id

  );

}
  getProduct(id: string) {

  return this.http.get<Product>(
    `${API.products}/${id}`
  );

}
  getProducts() {

  return this.http.get<Product[]>(API.products);

}

}