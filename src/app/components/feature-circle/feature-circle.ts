import { Component, input } from '@angular/core';
import { LucideAngularModule, LucideIconData, Van } from "lucide-angular";

@Component({
  selector: 'app-feature-circle',
  imports: [LucideAngularModule],
  templateUrl: './feature-circle.html',
  styleUrl: './feature-circle.css',
})
export class FeatureCircle {
  readonly icon = input.required<LucideIconData>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
