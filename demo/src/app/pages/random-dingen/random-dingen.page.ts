import { ChangeDetectionStrategy, ChangeDetectorRef, Component, effect, inject, input, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Snack } from '../../entities/snack';
import { Life } from '../../components/life';
import { Autocompleter } from '../../components/autocompleter';
import { ActivatedRoute } from '@angular/router';

@Component({
	imports: [Life, Autocompleter],
	templateUrl: './random-dingen.page.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomDingenPage {
	http = inject(HttpClient);
	cdr = inject(ChangeDetectorRef);
	// route = inject(ActivatedRoute);

	showLife = false;
	snacks?: Snack[];

	id = input<string>();

	constructor() {
		effect(() => {
			console.log('id is nu:', this.id());
		});
	}

	ngOnInit() {
		// this.route.para?

		this.http.get<Snack[]>('http://localhost:3000/snacks').subscribe(snacks => {
			this.snacks = snacks;
			this.cdr.markForCheck();
		});

		console.log('id:', this.id());
	}

	handleSelect(snack: Snack) {
		console.log('hey er is iets geselecteerd:', snack);
	}
}
