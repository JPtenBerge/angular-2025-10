import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideCheckNoChangesConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
// import { NavigateService } from './services/navigate';

export const appConfig: ApplicationConfig = {
	providers: [
		// globale instellingen / DI
		provideBrowserGlobalErrorListeners(),
		provideZonelessChangeDetection(),
		provideCheckNoChangesConfig({ exhaustive: true }),
		provideRouter(routes, withComponentInputBinding()),
		provideHttpClient(),

		// { provide: NavigateService, useFactory: () =>  }
		// NavigateService
	],
};
