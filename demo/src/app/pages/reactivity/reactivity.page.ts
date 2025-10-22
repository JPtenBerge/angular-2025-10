import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnDestroy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, filter, map, Observable, ReplaySubject, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// export const destroyMixin = () => {
// 	return class implements OnDestroy {
// 		destroyRef = new Subject<void>();

// 		ngOnDestroy(): void {
// 			this.destroyRef.next();
// 			this.destroyRef.complete();
// 		}
// 	};
// };

@Component({
	imports: [],
	templateUrl: './reactivity.page.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactivityPage {
	destroyRef = inject(DestroyRef);
	subscription!: Subscription;

	ngOnInit() {
		// Hongaarse notatie
		let source$ = new ReplaySubject<number>(1);
		// source.next(4);
		source$.next(8);
		// source.next(15);
		// source.next(15);

		this.subscription = source$
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe(value => console.log('subscribe value:', value));

		// this.subscription = source
		// 	.pipe(
		// 		filter(x => x > 10),
		// 		map(x => x * 10),
		// 		takeUntilDestroyed(this.destroyRef),
		// 	)
		// 	.subscribe(value => console.log('subscribe value:', value));

		// source.complete();

		setTimeout(() => {
			source$.next(16);
			source$.next(23);
			source$.next(42);
		}, 3000);
	}
}
