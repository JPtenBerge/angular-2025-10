import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { createSnack, Snack } from '../../entities/snack';

@Component({
	imports: [FormsModule, JsonPipe],
	templateUrl: './snack.page.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackPage {
	http = inject(HttpClient);
	cdr = inject(ChangeDetectorRef);

	newSnack = createSnack();
	isFetchingSnacks = false;

	snacks?: Snack[];

	ngOnInit() {
		this.isFetchingSnacks = true;
		this.http.get<Snack[]>('http://localhost:3000/snacks').subscribe(snacks => {
			this.isFetchingSnacks = false;
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
}
