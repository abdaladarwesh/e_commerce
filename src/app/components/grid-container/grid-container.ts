import { Component, input, OnInit, signal } from '@angular/core';
import { ProductCard } from "../product-card/product-card";

@Component({
  selector: 'app-grid-container',
  imports: [ProductCard],
  templateUrl: './grid-container.html',
  styleUrl: './grid-container.css',
})
export class GridContainer{
  productsInput = input.required<product[]>();
  
}