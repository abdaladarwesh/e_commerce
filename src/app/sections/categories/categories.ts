import { Component, signal } from '@angular/core';
import { SectionTitle } from "../../components/section-title/section-title";
import { CategoryCard } from "../../components/category-card/category-card";
import { Camera, Gamepad, Headphones, Laptop, Smartphone, Watch } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  imports: [SectionTitle, CategoryCard, CommonModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
  readonly phone = Smartphone;
  readonly pc = Laptop;
  readonly watch = Watch;
  readonly camera = Camera;
  readonly headphone = Headphones;
  readonly pad = Gamepad;

  selectedIcon = signal<number>(0);

  readonly icons = [
    { icon : this.phone, title: "Phones"},
    { icon : this.pc, title: "Computers"},
    { icon : this.watch, title: "Watches"},
    { icon : this.camera, title: "Cameras"},
    { icon : this.headphone, title: "HeadPhones"},
    { icon : this.pad, title: "Gamepads"},
  ]

  handleClick = (e:MouseEvent, index:number) => {
    this.selectedIcon.set(index);
  }


}
