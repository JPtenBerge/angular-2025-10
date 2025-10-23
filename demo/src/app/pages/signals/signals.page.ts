import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
	selector: 'app-signals',
	templateUrl: './signals.page.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsPage {
	// implicit reactivity
	naam = 'Lucas';
	changeName() {
		setTimeout(() => {
			console.log('Naam veranderd');
			this.naam += ' Reinier'; // implicit reactivty
		}, 100);
	}

	// explicit reactivity
	counter = signal(42);
	andereCounter = signal(108);
	doubled = computed(() => {
		return this.counter() * this.andereCounter();
	});

	increment() {
		// this.doubled.set
		setTimeout(() => {
			this.counter.set(108);
		}, 1000);
	}
}
