import { Component, input } from '@angular/core';
import { Eye, Heart, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-product-card',
  imports: [LucideAngularModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  readonly heart = Heart;
  readonly eye = Eye;

  title = input.required<string>();
  price = input.required<number>();
  imageUrl = input.required<string>();
  tooltip = input.required<string>();
}
