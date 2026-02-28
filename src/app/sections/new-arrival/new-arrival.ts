import { Component } from '@angular/core';
import { SectionTitle } from "../../components/section-title/section-title";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-new-arrival',
  imports: [SectionTitle, RouterLink],
  templateUrl: './new-arrival.html',
  styleUrl: './new-arrival.css',
})
export class NewArrival {

}
