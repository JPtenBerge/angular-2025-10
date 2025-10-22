import { Component, input } from '@angular/core';

@Component({
	selector: 'app-life',
	template: `
		hallo vanaf life!
	`,
})
export class Life {
    intervalId!: number;
    message = input();

    constructor() { // 3 use cases: DI, template, effect()
        console.log('[life] constructor', this.message());
    }

    ngOnInit() {
        console.log('[life] ngOnInit', this.message());

        this.intervalId = setInterval(() => console.log('interval!'), 1000);
    }

    ngOnDestroy() {
        console.log('[life] ngOnDestroy');

        clearInterval(this.intervalId);

        // dingen opruimen (connecties/async):
        // - openstaande WebSocket/SignalR
        // - async calls (bijv. fetch())
        // - navigator.geolocation.clearWatch
        // - microfoon
        // - camera
        // - media capture and streams sharing
        // - indexeddb
        // - I/O-operaties  FileReader
        // - timers
        // - observable subscriptions
    }
}
