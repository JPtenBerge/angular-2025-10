import { Routes } from '@angular/router';
import { SnackPage } from './pages/snack/snack.page';
import { RandomDingenPage } from './pages/random-dingen/random-dingen.page';
import { ReactivityPage } from './pages/reactivity/reactivity.page';

export const routes: Routes = [
	{ path: 'snacks', component: SnackPage },
	{ path: 'random-dingen/:id', component: RandomDingenPage },
	{ path: 'reactivity', component: ReactivityPage },
	{ path: '', redirectTo: '/snacks', pathMatch: 'full' },
];
