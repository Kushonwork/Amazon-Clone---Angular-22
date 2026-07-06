import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-shopping-cards',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './shopping-cards.html',
  styleUrl: './shopping-cards.css'
})
export class ShoppingCards {

  cards = [

    {
      title: 'Gaming Accessories',
      single: false,
      items: [
        {
          title: 'Keyboards',
          image: 'assets/images/shopping/gaming-keyboard.png'
        },
        {
          title: 'Gaming Mouse',
          image: 'assets/images/shopping/gaming-mouse.png'
        },
        {
          title: 'Headsets',
          image: 'assets/images/shopping/gaming-headset.png'
        },
        {
          title: 'Gaming Chairs',
          image: 'assets/images/shopping/gaming-chair.png'
        }
      ]
    },

    {
      title: 'Latest Fashion',
      single: false,
      items: [
        {
          title: 'Men',
          image: 'assets/images/shopping/fashion-men.png'
        },
        {
          title: 'Women',
          image: 'assets/images/shopping/fashion-women.png'
        },
        {
          title: 'Shoes',
          image: 'assets/images/shopping/fashion-shoes.png'
        },
        {
          title: 'Watches',
          image: 'assets/images/shopping/fashion-watch.png'
        }
      ]
    },

    {
      title: 'Refresh Your Home',
      single: false,
      items: [
        {
          title: 'Chair',
          image: 'assets/images/shopping/home-chair.png'
        },
        {
          title: 'Lamp',
          image: 'assets/images/shopping/home-lamp.png'
        },
        {
          title: 'Plants',
          image: 'assets/images/shopping/home-plant.png'
        },
        {
          title: 'Storage',
          image: 'assets/images/shopping/home-storage.png'
        }
      ]
    },

    {
      title: "Today's Deals",
      single: true,
      image: 'assets/images/shopping/deals.png'
    }

  ];

}