import { inject, Injectable } from '@angular/core';
import { Snack } from '../entities/snack';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SnackDal {
	private http = inject(HttpClient);
	private subject = new BehaviorSubject<Snack[]>([]);

	// state management: NgRx / MobX / TanStack Store?         Pinia (Vue)

	getAll() {
		console.log('getting snacks!');
		this.http.get<Snack[]>('http://localhost:3000/snacks').subscribe(snacks => {
			// snacks.forEach(snack => this.subject.next(snack));
			this.subject.next(snacks);
		});

		return this.subject.asObservable();
	}

	add(snack: Snack) {
		this.http.post<Snack>('http://localhost:3000/snacks', snack).subscribe(updatedSnack => {
			console.log('klaar!', updatedSnack);

			this.subject.next([...this.subject.value, updatedSnack]);
			// return this.getAll();
		});
	}

	// 5 oplossingen:
	// 1. zelf array bijhouden (simpelere cache)
	// 2. return this.getAll()
	// 3. geen Subject<Snack[]> Subject<Snack>
	// 4. BehaviorSubject
}
