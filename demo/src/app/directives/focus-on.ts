import { Directive, ElementRef, inject, Input } from '@angular/core';

@Directive({ selector: '[focusOn]' })
export class FocusOnDirective {
	@Input() set focusOn(condition: boolean) {
        console.log('focusen?', condition);
		if (condition) {
			this.el.focus();
		}
	}

	el = inject(ElementRef).nativeElement as HTMLElement;
}
