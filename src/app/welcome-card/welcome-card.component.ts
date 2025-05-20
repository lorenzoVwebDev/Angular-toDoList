import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'welcome-card',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './welcome-card.component.html',
  styleUrl: './welcome-card.component.scss'
})
export class WelcomeCardComponent {

}
