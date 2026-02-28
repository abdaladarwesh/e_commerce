import { Component} from '@angular/core';

import { Header } from "../../sections/header/header";
import { Categories } from "../../sections/categories/categories";
import { HorizontalLine } from "../../components/horizontal-line/horizontal-line";
import { NewArrival } from "../../sections/new-arrival/new-arrival";
import { Features } from "../../sections/features/features";

@Component({
  selector: 'app-home',
  imports: [Header, Categories, HorizontalLine, NewArrival, Features],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // TODO : Make the new arrival section

}
