import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCards } from './shopping-cards';

describe('ShoppingCards', () => {
  let component: ShoppingCards;
  let fixture: ComponentFixture<ShoppingCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCards],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
