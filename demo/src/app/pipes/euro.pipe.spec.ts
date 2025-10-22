import { EuroPipe } from './euro.pipe';

describe('Pipe: Euro', () => {
    let sut: EuroPipe;

    beforeEach(() => {
		sut = new EuroPipe(); // system under test
    });

	// suite [TestClass]
	it('should work', () => {
		// 1 unittest [TestMethod] @Test
		expect(4).toBe(4);
		expect('hoi').toBe('hoi');
		expect('hoi').not.toBe('doei');
		expect({}).toEqual({});
	});

	it('formats a whole number as a euro currency', () => {
		expect(sut.transform(123)).toBe('€ 123,00');
	});

    it('formats a number with one decimal as a euro currency', () => {
		expect(sut.transform(123.4)).toBe('€ 123,40');
	});

    it('formats a number with two decimals as a euro currency', () => {
		expect(sut.transform(123.45)).toBe('€ 123,45');
	});

    it('formats a number with two decimals as a euro currency', () => {
		expect(sut.transform(undefined)).toBe(undefined); // Garbage In Garbage Out 
	});
});
