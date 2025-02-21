import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HeartButtonComponent } from '../../shared/components/heart-button/heart-button.component';
import { SpinnerService } from '../../shared/services/spinner.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeartButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly spinnerService = inject(SpinnerService);

  public ngOnInit(): void {
  }

  public submitClick(): void {
    this.spinnerService.showSpinner();
    timer(5000).subscribe(() => {
      this.spinnerService.hideSpinner();
    });
  }
}
