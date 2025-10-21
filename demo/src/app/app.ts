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
		// Asynchronous JavaScript And JSON
		// AJAX  vanaf JavaScript in browser === HTTP ===> server
		// XMLHttpRequest fetch()    HttpClient?

		// HttpClient vs fetch()
		// - request/response interceptors
		//   - standaardheaders Authorization: ...
		//   - XML
		//   - "2024-05-06T12:14:33Z" => new Date()
		//   - errorhandling
		// - automatische JSON parsing
		// - typesafer
		
		// fetch<string>()

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
		})

		// this.snacks?.push(this.newSnack);
		this.newSnack = createSnack();
	}

	handleSelect(snack: Snack) {
		console.log('hey er is iets geselecteerd:', snack);
	}
}
