import { Routes } from '@angular/router';
import { SnackPage } from './pages/snack/snack.page';
import { RandomDingenPage } from './pages/random-dingen/random-dingen.page';
import { authGuard } from './guards/auth.guard';
import { AuthPage } from './pages/auth/auth.page';
import { InternalsPage } from './pages/internals/internals.page';
import { SignalsPage } from './pages/signals/signals.page';

export const routes: Routes = [
	{ path: 'snacks', component: SnackPage },
	{ path: 'random-dingen/:id', component: RandomDingenPage, canActivate: [authGuard] },
	{ path: 'reactivity', loadComponent: () => import('./pages/reactivity/reactivity.page').then(x => x.ReactivityPage) },
	{ path: 'auth', component: AuthPage },
	{ path: 'internals', component: InternalsPage },
	{ path: 'signals', component: SignalsPage },
	// {
	// 	path: 'admin',
	// 	canActivate: [authGuard],
	// 	children: [
	// 		{ path: 'products1' }, // admin/products
	// 		{ path: 'products2' }, // admin/products
	// 		{ path: 'products3' }, // admin/products
	// 		{ path: 'products4' }, // admin/products
	// 		{ path: 'products5' }, // admin/products
	// 		{ path: 'products6' }, // admin/products
	// 	],
	// },
	{ path: '', redirectTo: '/snacks', pathMatch: 'full' },
];
