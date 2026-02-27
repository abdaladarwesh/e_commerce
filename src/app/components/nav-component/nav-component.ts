import { Component, signal } from '@angular/core';
import {
  CircleX,
  Handbag,
  Heart,
  LogOut,
  LucideAngularModule,
  Menu,
  Search,
  ShoppingCart,
  Star,
  User,
  X,
} from 'lucide-angular';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav-component',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './nav-component.html',
  styleUrl: './nav-component.css',
})
export class NavComponent {
  handleProfileClick() {
    this.isOpened.update(v => !v)
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  isOpened = signal(false);
  menuOpen = signal(false);

  readonly SearchIcon = Search;
  readonly HeartIcon = Heart;
  readonly ShoppingCart = ShoppingCart;
  readonly UserIcon = User;
  readonly HandBag = Handbag;
  readonly CircleIcon = CircleX;
  readonly StarIcon = Star;
  readonly LogOutIcon = LogOut;
  readonly MenuIcon = Menu;
  readonly CloseIcon = X;
}
