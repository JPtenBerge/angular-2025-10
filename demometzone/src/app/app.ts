import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demometzone');

	name = 'Danny';

	changeName() {
		setTimeout(() => {
      console.log('naam veranderd!');
			this.name = 'Lucas';
      console.log(setTimeout);
		}, 1000);
	}
}
