import { Component, inject, OnInit, signal } from '@angular/core';
import { SectionTitle } from "../../components/section-title/section-title";
import { ScrollHorizontalContainer } from "../../components/scroll-horizontal-container/scroll-horizontal-container";
import { ProductCard } from "../../components/product-card/product-card";
import { Center } from "../../components/center/center";
import { CustomButton } from "../../components/custom-button/custom-button";
import { ProductsService } from '../../service/products-service';
import { Loading } from "../../components/loading/loading";

@Component({
  selector: 'app-header',
  imports: [SectionTitle, ScrollHorizontalContainer, ProductCard, Center, CustomButton, Loading],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit{

  protected productService = inject(ProductsService);

  products = signal<product[]>([]);
  loading = signal(false);
  ngOnInit(){
    this.loading.set(true);
    this.productService.getProducts().subscribe(
      {
        next: (product) => {
          this.products.set(product)
        },
        complete: () => this.loading.set(false),
        error: (err) => console.log(err)
      }
    );
    console.log(this.products());
  }
}
