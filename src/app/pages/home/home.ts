import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductsService } from '../../service/products-service';
import { GridContainer } from "../../components/grid-container/grid-container";

@Component({
  selector: 'app-home',
  imports: [GridContainer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{
  productService = inject(ProductsService);
  products = signal<product[]>([]);
  loading = signal(false);
  ngOnInit(){
    this.loading.set(true);
    this.productService.getProducts().subscribe(
      {
        next: (product) => {
          this.products.update((current) => product)
        },
        error: (err) => console.log(err)
      }
    );
    this.loading.set(false);
    console.log(this.products());
  }


}
