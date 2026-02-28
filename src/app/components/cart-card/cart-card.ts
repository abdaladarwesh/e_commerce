import { Component, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsStore } from '../../service/products-store';

@Component({
  selector: 'app-cart-card',
  imports: [FormsModule],
  templateUrl: './cart-card.html',
  styleUrl: './cart-card.css',
})
export class CartCard {
  productStore = inject(ProductsStore);

  readonly id = input.required<number>();
  readonly img = input.required<string>();
  readonly title = input.required<string>();
  readonly price = input.required<number>();
  readonly amount = input.required<number>(); 

  updateStoreQuantity(newAmount: number) {
    if (newAmount > 0) {
      this.productStore.updateQuantity(this.id(), newAmount);
    }
  }
}
