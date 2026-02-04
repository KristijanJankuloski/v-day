import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dark-button',
  imports: [CommonModule],
  templateUrl: './dark-button.component.html',
  styleUrl: './dark-button.component.scss'
})
export class DarkButtonComponent {
  public text = input.required();
}
