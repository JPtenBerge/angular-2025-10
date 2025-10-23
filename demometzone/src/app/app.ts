import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarViewer } from './car-viewer/car-viewer';

@Component({
  selector: 'app-root',
  imports: [CarViewer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('demometzone');

  name = 'Danny';

  changeName() {
    setTimeout(() => {
      console.log('naam veranderd!');
      this.name = 'Lucas';
      console.log(setTimeout);
    }, 1000);
  }

  cars = [
    { make: 'Cupra', model: 'Born' },
    { make: 'Peugeot', model: 'E-48589' },
    { make: 'Opel', model: 'Astra' },
  ];

  addCar() {
    this.cars.push({ make: 'Opel', model: 'Corsa' });
  }
}
