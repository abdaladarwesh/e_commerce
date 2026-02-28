import { Component } from '@angular/core';
import { CustomButton } from "../custom-button/custom-button";

@Component({
  selector: 'app-not-found',
  imports: [ CustomButton],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {

}
