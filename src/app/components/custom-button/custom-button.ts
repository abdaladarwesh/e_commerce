import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.html',
  styleUrl: './custom-button.css',
})
export class CustomButton {
  link = input<string>();
  protected router = inject(Router);

  navigateToProducts(){
    this.router.navigate([this.link()]);
  }

}
