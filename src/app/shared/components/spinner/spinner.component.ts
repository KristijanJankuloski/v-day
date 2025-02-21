import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-spinner',
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  animations: [
    trigger('openClose', [
      transition(':enter', [style({opacity: 0}), animate('200ms', style({opacity: 1}))]),
      transition(':leave', [animate('200ms', style({opacity: 0}))])
    ])
  ]
})
export class SpinnerComponent {
  private readonly spinnerService = inject(SpinnerService);

  public showSpinner = this.spinnerService.spinnerStatus;
}
