import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { createSnack, Snack } from '../../entities/snack';
import { FocusOnDirective } from '../../directives/focus-on';

function mijnValidator(control: AbstractControl) {
	// return { mijn: 'nope' };
	return null;
}

@Component({
	imports: [FormsModule, ReactiveFormsModule, JsonPipe, FocusOnDirective],
	templateUrl: './snack.page.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackPage {
	http = inject(HttpClient);
	cdr = inject(ChangeDetectorRef);
	fb = inject(NonNullableFormBuilder);

	newSnack = createSnack();
	isFetchingSnacks = false;

	snacks?: Snack[];

	// addSnackForm = new FormGroup({
	// 	name: new FormControl<string>('', {
	// 		nonNullable: true,
	// 		validators: [Validators.required, Validators.pattern('^[a-zA-Z \-]{3,}$')],
	// 	}),
	// 	kcal: new FormControl<number>(0, { nonNullable: true, validators: Validators.required }),
	// 	photoUrl: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
	// });
	addSnackForm = this.fb.group({
		name: ['', [mijnValidator, Validators.required, Validators.pattern('^[a-zA-Z \-]{3,}$')]],
		kcal: [0],
		photoUrl: [''],
	});
	get f() {
		return this.addSnackForm.controls;
	}

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

	addSnackReactive() {
		// this.http.post<Snack>('http://localhost:3000/snacks', this.addSnackForm.value).subscribe(updatedSnack => {
		// 	console.log('klaar!', updatedSnack);
		// 	this.snacks?.push(updatedSnack);
		// 	this.cdr.markForCheck();
		// });
		// this.addSnackForm.reset();

		this.addSnacky(this.addSnackForm.getRawValue());



		// this.addSnackForm.controls.name.setValue('');

	}

	addSnacky(snack: Snack) {
		this.http.post<Snack>('http://localhost:3000/snacks', snack);
	}
}
