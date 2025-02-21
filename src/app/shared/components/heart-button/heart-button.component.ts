import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heart-button',
  imports: [CommonModule],
  templateUrl: './heart-button.component.html',
  styleUrl: './heart-button.component.scss'
})
export class HeartButtonComponent {
  public text = input.required();
}
