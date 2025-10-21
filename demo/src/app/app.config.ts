import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
// import { NavigateService } from './services/navigate';

export const appConfig: ApplicationConfig = {
	providers: [
		// globale instellingen / DI
		provideBrowserGlobalErrorListeners(),
		provideZonelessChangeDetection(),
		provideRouter(routes),

    // { provide: NavigateService, useFactory: () =>  }
    // NavigateService
	],
};
