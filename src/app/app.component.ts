import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatCardModule],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'toDoList';
}
