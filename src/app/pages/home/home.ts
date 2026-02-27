import { Component} from '@angular/core';

import { Header } from "../../sections/header/header";
import { Categories } from "../../sections/categories/categories";
import { HorizontalLine } from "../../components/horizontal-line/horizontal-line";

@Component({
  selector: 'app-home',
  imports: [Header, Categories, HorizontalLine],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // TODO : make the loadding for the products page
  // TODO : Make the new arrival section

}
