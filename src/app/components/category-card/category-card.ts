import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from "lucide-angular";

@Component({
  selector: 'app-category-card',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './category-card.html',
  styleUrl: './category-card.css',
})
export class CategoryCard {
  readonly icon = input.required<LucideIconData>();
  readonly title = input.required<string>();
  readonly isSelected = input<boolean>();
}
