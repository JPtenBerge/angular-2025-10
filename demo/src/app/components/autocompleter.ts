import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { NavigateService } from '../services/navigate';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
	selector: 'app-autocompleter',
	templateUrl: './autocompleter.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: false,
})
export class Autocompleter<T extends {}> {
	data = input.required<T[]>();
	select = output<T>();
	navigateService = inject(NavigateService);

	query = new FormControl('');
	activeSuggestionIndex: number | null = null;

	suggestions?: T[];


	ngOnInit() {
		this.query.valueChanges
			.pipe(debounceTime(300), distinctUntilChanged())
			.subscribe(value => this.autocomplete());
	}

	autocomplete() {
		console.log('autocompleting!', this.query.value)
		this.suggestions = [];

		for (let item of this.data()) {
			// reflection
			let props = Object.keys(item) as (keyof T)[];

			for (let prop of props) {
				let value = item[prop];
				if (typeof value !== 'string') {
					continue;
				}

				if (value.includes(this.query.value!)) {
					this.suggestions.push(item);
					break;
				}
			}
		}
	}

	next() {
		if (!this.suggestions) return;

		this.activeSuggestionIndex = this.navigateService.next(this.suggestions, this.activeSuggestionIndex);
	}

	handleSelect() {
		if (!this.suggestions || this.activeSuggestionIndex === null) return;

		let suggestion = this.suggestions[this.activeSuggestionIndex];
		this.select.emit(suggestion);
	}
}
