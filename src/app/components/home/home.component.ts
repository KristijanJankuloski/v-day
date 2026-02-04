import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HeartButtonComponent } from '../../shared/components/heart-button/heart-button.component';
import { SpinnerService } from '../../shared/services/spinner.service';
import { timer } from 'rxjs';
import { FormControl } from '@angular/forms';
import { DarkButtonComponent } from '../../shared/components/dark-button/dark-button.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeartButtonComponent, DarkButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly spinnerService = inject(SpinnerService);

  public formControl = new FormControl('');
  public saidYes = false;
  public multiplier = 1;
  public showNo = true;
  public noText = "No";

  public ngOnInit(): void {
  }

  public submitClick(): void {
    this.showNo = false;
    this.spinnerService.showSpinner();
    timer(5000).subscribe(() => {
      this.saidYes = true;
      this.spinnerService.hideSpinner();
    });
  }

  public noClicked(): void {
    this.multiplier += 0.2;
    if (this.multiplier > 1) {
      this.noText = "No :c";
    }
    if (this.multiplier > 3) {
      this.noText = "No >:c";
    }
    if (this.multiplier > 5) {
      this.noText = "Bruh really?";
    }
    if (this.multiplier > 9.9) {
      this.noText = "Stop it";
    }
    if (this.multiplier > 10) {
      this.showNo = false;
    }
  }
}
