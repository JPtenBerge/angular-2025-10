export interface Snack {
	name: string;
	kcal: number;
	photoUrl: string;
}

export const createSnack = (overrides?: Partial<Snack>): Snack => {
	return {
		name: '',
		kcal: 0,
		photoUrl: '',
		...overrides,
	};
};
