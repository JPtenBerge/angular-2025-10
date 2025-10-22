import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, ReplaySubject, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
	imports: [],
	templateUrl: './reactivity.page.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactivityPage {
	destroyRef = inject(DestroyRef);
	subscription!: Subscription;

	ngOnInit() {
		let source = new ReplaySubject<number>(1);
		// source.next(4);
		source.next(8);
		// source.next(15);
		// source.next(15);

		this.subscription = source.subscribe(value => console.log('subscribe value:', value));

		// this.subscription = source
		// 	.pipe(
		// 		filter(x => x > 10),
		// 		map(x => x * 10),
		// 		takeUntilDestroyed(this.destroyRef),
		// 	)
		// 	.subscribe(value => console.log('subscribe value:', value));

		// source.complete();

		setTimeout(() => {
			source.next(16);
			source.next(23);
			source.next(42);
		}, 3000);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
