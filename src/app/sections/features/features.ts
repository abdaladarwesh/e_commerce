import { Component } from '@angular/core';
import { Headphones, LucideAngularModule, Shield, Van } from "lucide-angular";
import { FeatureCircle } from "../../components/feature-circle/feature-circle";

@Component({
  selector: 'app-features',
  imports: [LucideAngularModule, FeatureCircle],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
  readonly van = Van;
  readonly headphone = Headphones;
  readonly sheild = Shield;
}
