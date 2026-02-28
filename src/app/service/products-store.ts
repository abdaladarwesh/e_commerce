import { Injectable, signal, computed } from '@angular/core';

export interface CartItem {
  product: product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsStore {
  protected cartItems = signal<CartItem[]>([]);

  public totalPrice = computed(() => {
    return this.cartItems().reduce(
      (total, item) => total + (item.product.price * item.quantity), 
      0
    );
  });

  addProduct(product: product){
    this.cartItems.update((items) => {
      const existingItem = items.find(i => i.product.id === product.id);
      if (existingItem) {
        return items.map(i => i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...items, { product, quantity: 1 }];
    });
  }

  updateQuantity(productId: number, quantity: number){
    this.cartItems.update((items) => 
      items.map((i) => i.product.id === productId ? { ...i, quantity } : i)
    );
  }

  removeProduct(productId: number){
    this.cartItems.update((items) => 
      items.filter((i) => i.product.id !== productId)
    );
  }

  getTotalProducts(): number{
    return this.cartItems().length;
  }

  getCartItems(): CartItem[]{
    return this.cartItems();
  }
}
