import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { MockProvider } from 'ng-mocks';
import { Autocompleter } from './autocompleter';
import { NavigateService } from '../services/navigate';
import { setInput } from '../../utils/set-input';

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
		data = [
			{ make: 'Cupra', model: 'Born' },
			{ make: 'Peugeot', model: 'E-48589' },
			{ make: 'Opel', model: 'Astra' },
		];

		TestBed.configureTestingModule({
			declarations: [],
			imports: [Autocompleter],
			providers: [provideZonelessChangeDetection(), MockProvider(NavigateService)],
		});
		navigateServiceMock = TestBed.inject(NavigateService) as jasmine.SpyObj<NavigateService>;
		navigateServiceMock.next.and.returnValue(42);

		fixture = TestBed.createComponent(Autocompleter<Car>);
		setInput(fixture, 'data', data);
		sut = fixture.componentInstance;
	});

	it('autocompletes', () => {});

	it(`uses ${NavigateService.name} for nexting`, () => {
		sut.autocomplete();

		sut.next();

		expect(navigateServiceMock.next).toHaveBeenCalled();
		expect(sut.activeSuggestionIndex).toBe(42);
	});
});
