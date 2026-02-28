import { Component, inject } from '@angular/core';
import { CartCard } from "../../components/cart-card/cart-card";
import { ProductsStore } from '../../service/products-store';
import { TotalCart } from "../../sections/total-cart/total-cart";

@Component({
  selector: 'app-cart',
  imports: [CartCard, TotalCart],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  productStore = inject(ProductsStore);  

}
