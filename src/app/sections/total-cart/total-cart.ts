import { Component, input } from '@angular/core';
import { CustomButton } from "../../components/custom-button/custom-button";
import { Center } from "../../components/center/center";

@Component({
  selector: 'app-total-cart',
  imports: [CustomButton, Center],
  templateUrl: './total-cart.html',
  styleUrl: './total-cart.css',
})
export class TotalCart {
  readonly total = input.required<number>();

}
