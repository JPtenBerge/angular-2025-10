import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, inject, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-viewer',
  templateUrl: './car-viewer.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarViewer implements DoCheck {
  cars = input.required<{ make: string; model: string; }[]>();
  cdr = inject(ChangeDetectorRef);


  getDisplayValue(car: { make: string; model: string; }) {
    // let car = this.cars()[0];
    car.make += 'w';
    return `${car.make} ${car.model}`;
  }

  ngDoCheck() {
    if (this.cars().length % 5 === 0) {
      this.cdr.markForCheck();
    }
  }

  doeNiks() {
    this.cars().push({ make: 'Ferrari', model: 'Testarossa' });
  }
}
