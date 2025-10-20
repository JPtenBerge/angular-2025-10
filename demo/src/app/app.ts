import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EuroPipe } from './euro.pipe';

interface Snack {
  name: string;
  kcal: number;
  photoUrl: string;
}

const createSnack = (overrides?: Partial<Snack>): Snack => {
  return {
    name: '',
    kcal: 0,
    photoUrl: '',
    ...overrides
  }
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, EuroPipe, JsonPipe, CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo');

  // newSnack: Snack = { name: '', kcal: 0, photoUrl: ''};
  // newSnack = {} as Snack;
  newSnack = createSnack();
  // newSnack = createSnack({ name: 'Meixcano' });

  snacks?: Snack[] = [
    { name: 'Kipnugget', kcal: 60, photoUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.restauranttakeoff.nl%2Fwp-content%2Fuploads%2F2020%2F01%2FKipnuggets.png&f=1&nofb=1&ipt=934c20c66ff4f02110b748ece8f76fa4a38141fd0073861080511691496427bf' },
    { name: 'Frikandel', kcal: 140, photoUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsnackfuture.com%2Fwp-content%2Fuploads%2F2022%2F07%2FFrikandel-of-frikadel-2259140871-1660121827584.jpg&f=1&nofb=1&ipt=41908c826b4c8fd76ada92a45db4cdf594e618f7c538f550e1c0f8ac107f01f6' },
    { name: 'Mexicano', kcal: 170, photoUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdegrotegoesting.be%2Fwp-content%2Fuploads%2F2020%2F10%2FFrituurdegrotegoesting_website_productfotos_mexicano-768x512.jpg&f=1&nofb=1&ipt=fab1470356d814cbb546e35c173e18582429af4e0553a96b9110805d094b1043' },
  ];

  addSnack() {

    // how to clone an object?
    // 1. let clone = { ...this.newSnack }; // shallow copy
    // 2. JSON.parse(JSON.stringify(this.newSnack))   // deep copy
    // 3. structuredClone(obj) // deep clone
    // 4. this.newSnack = createSnack();

    this.snacks?.push(this.newSnack);
    this.newSnack = createSnack();
  }
}
