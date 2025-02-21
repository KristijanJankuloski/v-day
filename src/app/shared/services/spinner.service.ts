import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private _showSpinner = signal(false);

  constructor() { }

  public spinnerStatus = computed(() => this._showSpinner());

  public showSpinner(): void {
    this._showSpinner.set(true);
  }

  public hideSpinner(): void {
    this._showSpinner.set(false);
  }
}
