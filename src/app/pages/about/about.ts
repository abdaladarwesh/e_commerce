import { Component } from '@angular/core';
import { LucideAngularModule, Store, CircleDollarSign, ShoppingBag, Coins } from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly StoreIcon = Store;
  readonly DollarIcon = CircleDollarSign;
  readonly BagIcon = ShoppingBag;
  readonly MoneyIcon = Coins;
}
