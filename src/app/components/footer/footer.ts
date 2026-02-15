import { Component } from '@angular/core';
import { Instagram, LucideAngularModule, SendHorizontalIcon, Twitter , Facebook, Linkedin} from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})


export class Footer {
  readonly SendIcon = SendHorizontalIcon; 
  readonly FacebookIcon = Facebook; 
  readonly TwitterIcon = Twitter; 
  readonly InstagramIcon = Instagram; 
  readonly Linkedin = Linkedin; 
}
