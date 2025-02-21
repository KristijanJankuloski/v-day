import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'v-day';
}
