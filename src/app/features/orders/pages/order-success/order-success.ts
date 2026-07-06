import { Component, OnInit } from '@angular/core';

import { RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface OrderDetails {

  total: number;

  items: number;

  customer: string;

  payment: string;

}

@Component({
  selector: 'app-order-success',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './order-success.html',
  styleUrl: './order-success.css'
})
export class OrderSuccess implements OnInit {

  order: OrderDetails | null = null;


  ngOnInit(): void {

    const savedOrder =
      sessionStorage.getItem(
        'last-order'
      );


    if (savedOrder) {

      this.order =
        JSON.parse(savedOrder);

    }

  }

}