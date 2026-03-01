import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../service/products-service';
import { Loading } from "../../components/loading/loading";
import { ProductCard } from "../../components/product-card/product-card";
import { ProductsStore } from '../../service/products-store';
import { LucideAngularModule, Heart, Truck, RefreshCcw, Minus, Plus, Star } from 'lucide-angular';

@Component({
  selector: 'app-product-details',
  imports: [Loading, ProductCard, LucideAngularModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductsService);
  productStore = inject(ProductsStore);
  
  product = signal<product | null>(null);
  relatedProducts = signal<product[]>([]);
  isLoading = signal(true);

  activeImage = signal<string>('');
  quantity = signal<number>(1);
  selectedColor = signal<string>('#a0bce0');
  selectedSize = signal<string>('M');

  readonly heart = Heart;
  readonly truck = Truck;
  readonly refresh = RefreshCcw;
  readonly minus = Minus;
  readonly plus = Plus;
  readonly star = Star;

  colors = ['#a0bce0', '#e07676'];
  sizes = ['XS', 'S', 'M', 'L', 'XL'];
  starsRating = [1, 2, 3, 4, 5];

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.isLoading.set(true);
      if (id) {
        this.productService.getProduct(Number(id)).subscribe({
          next: (prod) => {
            this.product.set(prod);
            if (prod.images && prod.images.length > 0) {
              let cleanImage = prod.images[0].replace(/[\[\]"]/g, '');
              this.activeImage.set(cleanImage);
            }
          },
          complete: () => this.isLoading.set(false),
          error: err => console.error(err)
        });
        
        this.productService.getProducts().subscribe({
          next: (prods) => {
            if (prods && prods.length > 0) {
              this.relatedProducts.set(prods.slice(0, 4));
            }
          },
          error: err => console.error(err)
        });
      }
    });
  }

  changeImage(img: string) {
    this.activeImage.set(img);
  }


  increaseQuantity() {
    this.quantity.update(q => q + 1);
  }

  decreaseQuantity() {
    this.quantity.update(q => q > 1 ? q - 1 : 1);
  }

  addToCart() {
    const prod = this.product();
    if (prod) {
      for (let i = 0; i < this.quantity(); i++) {
        this.productStore.addProduct(prod);
      }
    }
  }

  selectColor(c: string) {
    this.selectedColor.set(c);
  }

  selectSize(s: string) {
    this.selectedSize.set(s);
  }
}
