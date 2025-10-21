import { Routes } from '@angular/router';
import { SnackPage } from './pages/snack/snack.page';
import { RandomDingenPage } from './pages/random-dingen/random-dingen.page';

export const routes: Routes = [
	{ path: 'snacks', component: SnackPage },
	{ path: 'random-dingen/:id', component: RandomDingenPage },
	{ path: '', redirectTo: '/snacks', pathMatch: 'full' },
];
