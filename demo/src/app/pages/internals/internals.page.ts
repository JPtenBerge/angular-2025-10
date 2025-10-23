import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarViewer } from '../../components/car-viewer/car-viewer';

@Component({
	templateUrl: './internals.page.html',
	imports: [CarViewer],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InternalsPage {
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
