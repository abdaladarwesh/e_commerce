import { Component, inject, input } from '@angular/core';
import { Eye, Heart, LucideAngularModule, ShoppingCart } from 'lucide-angular';
import { ProductsStore } from '../../service/products-store';

@Component({
  selector: 'app-product-card',
  imports: [LucideAngularModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  readonly heart = Heart;
  readonly eye = Eye;
  readonly cart = ShoppingCart;
  protected productStore = inject(ProductsStore);
  
  handleAddToCart() {
    this.productStore.addProduct(this.product());
    console.log(this.productStore.getCartItems());
  }
  
  product = input.required<product>();
}
