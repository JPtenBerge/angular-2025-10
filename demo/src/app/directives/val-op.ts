import { Directive, ElementRef, HostListener, inject, Input } from '@angular/core';

@Directive({ selector: '[valOp]' })
export class ValOpDirective {
	@Input() valOp!: string;

	el = inject(ElementRef).nativeElement as HTMLElement;

	@HostListener('mouseover') mouseover() {
		this.el.style.backgroundColor = this.valOp;
	}
	@HostListener('mouseout') mouseout() {
		this.el.style.backgroundColor = '';
	}
}


