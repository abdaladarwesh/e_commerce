import { Component } from '@angular/core';
import { Center } from "../center/center";
import { CustomButton } from "../custom-button/custom-button";

@Component({
  selector: 'app-not-found',
  imports: [Center, CustomButton],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {

}
