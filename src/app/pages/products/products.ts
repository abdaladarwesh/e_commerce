import { Component, inject, OnInit, signal } from '@angular/core';
import { GridContainer } from "../../components/grid-container/grid-container";
import { ProductsService } from '../../service/products-service';
import { ProductCard } from "../../components/product-card/product-card";
import { Loading } from "../../components/loading/loading";

@Component({
  selector: 'app-products',
  imports: [GridContainer, ProductCard, Loading],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit{
  isLoading = signal(false);
  productsService = inject(ProductsService);
  products = signal<product[]>([]);

  ngOnInit(): void {
    this.isLoading.set(true);
    this.productsService.getProducts().subscribe({
      next: (product) => {
        this.products.set(product);
      },
      complete: () => this.isLoading.set(false),
      error: (e) => console.log(e)
    })    
  }


}
