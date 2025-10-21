import { JsonPipe } from '@angular/common';
import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Life } from './components/life';
import { Autocompleter } from './components/autocompleter';
import { createSnack, Snack } from './entities/snack';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	imports: [FormsModule, Life, Autocompleter, JsonPipe],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	protected readonly title = signal('demo');

	http = inject(HttpClient);
	cdr = inject(ChangeDetectorRef);

	showLife = false;
	newSnack = createSnack();

	snacks?: Snack[];

	ngOnInit() {
		this.http.get<Snack[]>('http://localhost:3000/snacks').subscribe(snacks => {
			this.snacks = snacks;
			this.cdr.markForCheck();
		});
	}

	addSnack() {
		this.http.post<Snack>('http://localhost:3000/snacks', this.newSnack).subscribe(updatedSnack => {
			console.log('klaar!', updatedSnack);
			this.snacks?.push(updatedSnack);
			this.cdr.markForCheck();
		});

		this.newSnack = createSnack();
	}

	handleSelect(snack: Snack) {
		console.log('hey er is iets geselecteerd:', snack);
	}
}
