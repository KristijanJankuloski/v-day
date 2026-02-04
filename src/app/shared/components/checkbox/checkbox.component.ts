import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  public control = input.required<FormControl>();
}
