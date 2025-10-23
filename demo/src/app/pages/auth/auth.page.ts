import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth';

@Component({
	imports: [],
	templateUrl: './auth.page.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPage {
	private authService = inject(AuthService);

	login() {
		this.authService.login();
	}
	logout() {
		this.authService.logout();
	}
}
