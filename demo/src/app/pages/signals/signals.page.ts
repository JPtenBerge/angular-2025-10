import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
	selector: 'app-signals',
	templateUrl: './signals.page.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsPage {

  // signals?
  // - observables, maar dan simpeler
  //   - geen pipes, dus filter() en map() etc. oldschool procedureel uitprogrammeren
  // - reactivity - reify reactivity
  //   "to make something abstract more real/concrete"
  // - explicit reactivity
  // - native in Angular
  //   - haken WEL in change detection - .markForCheck()

  naam = 'Lucas';
  changeName() {
    setTimeout(() => {
      console.log('Naam veranderd');
      this.naam += ' Reinier'; // implicit reactivty
    }, 100);
  }
  // verandering: tijdsaspect, parameter rondsturen, waarde baseren

  counter = signal(42);
  andereCounter = signal(108);



  doubled = computed(() => {
    return this.counter() * this.andereCounter()
  });
  // dependency graph
  // - nooit te .unsubscribe()
  

  increment() {
    // this.doubled.set

    setTimeout(() => {
      this.counter.set(108);
    }, 1000);
  }

}
