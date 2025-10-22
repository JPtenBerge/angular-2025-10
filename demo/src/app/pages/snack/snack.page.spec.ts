import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SnackPage } from './snack.page';
import { MockProvider } from 'ng-mocks';
import { SnackDal } from '../../dal/snack.dal';
import { Observable, of } from 'rxjs';
import { provideZoneChangeDetection, provideZonelessChangeDetection } from '@angular/core';

fdescribe('Page: Snack', () => {
	let sut: SnackPage;
    let fixture: ComponentFixture<SnackPage>;
	let snackDalMock: jasmine.SpyObj<SnackDal>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [SnackPage],
			providers: [provideZoneChangeDetection(), MockProvider(SnackDal)],
		});
		snackDalMock = TestBed.inject(SnackDal) as jasmine.SpyObj<SnackDal>;
		snackDalMock.getAll.and.returnValue(of([{ name: 'qqqqqqqqqqqq', photoUrl: '', kcal: 44 }]));

        fixture = TestBed.createComponent(SnackPage);
		sut = fixture.componentInstance;
	});

	it('handles reactive Observables', () => {
		sut.ngOnInit();

		expect(sut.snacks).toEqual([{ name: 'qqqqqqqqqqqq', photoUrl: '', kcal: 44 }]);
	});

	it('lets the user know it is fetching snacks', () => {
		snackDalMock.getAll.and.returnValue(new Observable(() => {}));

		sut.ngOnInit();

		expect(sut.isFetchingSnacks).toBeTrue();
		expect(sut.snacks).toBeUndefined();
	});

	it('changes names', fakeAsync(() => {
		sut.changeName();

		// setTimeout(() => {
		tick(2500);
		expect(sut.name).toBe('Danny');
		// done();
		// }, 3000);
	}));

    it('renders stuff', () => {
        sut.ngOnInit();
        fixture.detectChanges();

        let element = fixture.nativeElement as HTMLElement;
        // element.querySelectorAll
        expect(element.innerHTML).toContain('qqqqqqqqqqqq');
        console.log(element.innerHTML);
    });
});
