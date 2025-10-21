import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Autocompleter } from './autocompleter';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { NavigateService } from '../services/navigate';

interface Car {
	make: string;
	model: string;
}

describe(`Component: ${Autocompleter.name}`, () => {
	let sut: Autocompleter<Car>;
	let fixture: ComponentFixture<Autocompleter<Car>>;
	let navigateServiceMock: jasmine.SpyObj<NavigateService>;
	let data: Car[];

	beforeEach(() => {
		// Karma (testrunner) / Jasmine - mocks
		navigateServiceMock = jasmine.createSpyObj<NavigateService>('navigateServiceMock', ['next']);
		navigateServiceMock.next.and.returnValue(42);

		data = [
			{ make: 'Cupra', model: 'Born' },
			{ make: 'Peugeot', model: 'E-48589' },
			{ make: 'Opel', model: 'Astra' },
		];

		TestBed.configureTestingModule({
			declarations: [],
			imports: [Autocompleter],
			providers: [provideZonelessChangeDetection(), { provide: NavigateService, useValue: navigateServiceMock }],
		});
		fixture = TestBed.createComponent(Autocompleter<Car>);
		sut = fixture.componentInstance;
	});

	it('autocompletes', () => {});

	it(`uses ${NavigateService.name} for nexting`, () => {
		fixture.componentRef.setInput('data', data);
		sut.autocomplete();

		sut.next();

		expect(navigateServiceMock.next).toHaveBeenCalled();
		expect(sut.activeSuggestionIndex).toBe(42);
	});
});
