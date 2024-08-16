import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from "./about-me/about-me.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, AboutMeComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
