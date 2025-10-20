import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'euro' })
export class EuroPipe implements PipeTransform {
	transform(value?: number): string | undefined {
		if (value === undefined) return undefined; // undefined

		let [wholes, decimals] = value.toString().split('.');

		if (decimals) {
			return `€ ${wholes},${decimals.padEnd(2, '0')}`;
		}

		return `€ ${wholes},00`;
	}
}
