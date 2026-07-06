import {
  Component,
  OnInit,
  OnDestroy,
  signal
} from '@angular/core';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  templateUrl: './hero-slider.html',
  styleUrl: './hero-slider.css'
})
export class HeroSlider implements OnInit, OnDestroy {

  images = [

    'assets/images/hero-1.png',

    'assets/images/hero-2.png',

    'assets/images/hero-3.png'

  ];

  currentSlide = signal(0);

  private intervalId!: number;

  ngOnInit() {

    this.intervalId = window.setInterval(() => {

      this.next();

    }, 5000);

  }

  ngOnDestroy() {

    clearInterval(this.intervalId);

  }

  next() {

    this.currentSlide.update(value =>

      (value + 1) % this.images.length

    );

  }

  previous() {

    this.currentSlide.update(value =>

      value === 0

        ? this.images.length - 1

        : value - 1

    );

  }

}