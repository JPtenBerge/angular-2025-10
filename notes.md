# Notes

## Waarom Angular?

- makkelijker maken om een frontend te maken
- herbruikbare code
- update detection - iets aanpassen zorgt automatisch voor reloads
- features!
  - routing
    - guards
    - lazy loading
    - child routes
  - `HttpClient` voor backendcommunicatie
  - testing
  - dependency injection

### Angular vs React/Vue/Svelte

- ze willen allemaal de DOM API oplossen
  - `document.querySelector()` `document.createElement()` `.style.display = '..'` `.setAttribute()`
    `.addClass('...');`
  - lastig te testen
  - herbruikbare code
    - component-based development
- React/Vue/Svelte zijn eigenlijk view libraries
- Angular is echt een framework, bevat veel meer features

jQuery? Was goed in 3 dingen:

- DOM manipulation korter/leesbaarder
  - `$('div').addClass('qwwe').show();`
  - Angular/Svelte/React/Vue bieden allemaal iets van databinding waarmee code nog leesbaarder maar ook ruim beter te testen is
- kort en snel AJAX - moest destijds met `XMLHttpRequest`, maar we hebben nu `fetch()`
- browserabstractie `btn.addEventListener()` in de meeste browsers, `btn.attachEvent()` in IE 6/7/8
  - `btn.click(function() { });` abstraheerde dat gedoe weg

Blazor

- probeert JS op te lossen
- C#

### waarom NIET Angular?

- bulky? - redelijk
- performance? - is best ok!
- geen Angularmensen in je team/org
- opionated!
- veul oude dingen maar ook nieuwe dingen?
  - Angular zit momenteel in een lang migratietraject

## Angularproject aanmaken

- index.html
- client-side libs
  - @angular/core
  - @angular/router
  - @angular/http
  - ...
  - tslib
  - rxjs
  - zonejs
- unittesting
  - Mocha chai sinon Vitest Jest Karma Jasmine
- end-to-end testing
  - Playwright Cypress TestCafe @webdriver/io Nightwatch
- TypeScript
- codekwaliteit ESLint Prettier
- ...

@angular/cli helpt hier heel erg bij!

- `ng new <projectnaam>`
- `ng build`
- `ng serve`
- `ng test`
- `ng e2e`
- `ng generate`

## SSR

- initiele HTML wordt opgebouwd aan serverkant
- browser neemt het daarna over en dus wordt het dan weer gewoon een SPA
- complexiteit++

## Pipes

Default pipes:

- uppercase
- lowercase
- titlecase
- date
- currency
- json
- async

Output van pipe A is input voor pipe B:

```html
{{ name | uppercase | empty }}
```

## Modern Angular development

- signals
- Zoneless
- `OnPush` change detection

## Dependency injection

- framework geeft jou instanties, je maakt ze niet zelf
- makkelijker met unittesten
  - mocken
- zijn standaard singletons
- geen interfaces, want interfaces bestaan niet in JavaScript en DI wordt at runtime uitgevoerd

## Backendcommunicatie

AJAX: Asynchronous JavaScript And JSON

- vanaf JavaScript in browser === HTTP ===> server
- vroeger via `XMLHttpRequest`, tegenwoordig meer `fetch()`. Maar Angular gebruikt een `HttpClient`?

`HttpClient` vs `fetch()`?

- request/response interceptors
  - standaardheaders `Authorization: ...`
  - XML parsen
  - "2024-05-06T12:14:33Z" omzetten naar `new Date()`/`Temporal`-instanties
  - errorhandling
- automatische JSON-parsing
- typesafer
  - `fetch<string>()` is nog niet een ding in standaard TypeScript

### Hoe ververs ik mijn lokale array?

Multi-user scenario's even niet meegerekend.

1. instant toevoegen aan de array.
   - voordeel: lekker snel
   - nadeel: er kan iets stukgaan bij de server. UX is erg belangrijk.
   - nadeel: niet in sync met server. Je hebt geen ID.
2. vanaf callback toevoegen aan de array.
   - voordeel: meer in sync met de server. Paginatie/filtering/sortering
   - voordeel: redelijk snel.
   - nadeel: je moet wel je POST afwachten
3. opnieuw ophalen.
   - nadeel: langzaam.
   - nadeel: alles ophalen => maximaal je server belasten
   - voordeel: meest in sync
   - voordeel: makkelijkst te implementeren - `.getAll()`

## Routing

Conceptueel kan een SPA routing op een aantal manieren implementeren:

1. heel veel elementen in de DOM
   ```html
   <div id="page1" style="display: none;">
     <div id="page2">
       <div id="page3" style="display: none;">
         <div id="page..." style="display: none;">
           <div id="page299" style="display: none;">
             <div id="page300" style="display: none;"></div>
           </div>
         </div>
       </div>
     </div>
   </div>
   ```
2. alle paginatemplates in strings in-memory opslaan
   ```ts
   let pages = [`<div id="...">`, `...`];
   ```
3. lazy loading - paginatemplate opvragen bij server als de gebruiker naar die pagina wil

Routing doorvoeren:

- `<router-outlet />` opnemen in je `app.html`
- routedefinities - /url => paginacomponent
- alles opsplitsen in pagina's

Features van Angular's router:

- basic routing
- parameters
- route guards
- route resolvers
- lazy loading
- child routes

## Reactive vs template forms

Voordelen reactive:

- Dynamisch formulier opbouwen is iets makkelijker in reactive
- scheiding tussen template/formdefinitie is fijn
- functioneel:
  - custom validators zijn makkelijker te maken (gewone function vs directive)
  - unittesten is makkelijker (template hoeft niet gerenderd te worden)

Maar, er is verder niks mis met template-driven. Is puur voorkeur.

## Directives

- componenten maar dan zonder template
  - `<jouw-component blaDirective>`
  - `<input required pattern jouwCustomValidatie>`
  - `[(ngModel)]="..."`
- extenden element/component met gedrag: `<div cdkDrag>` `<button pButton>`

```html
<div valOp>
  <h2 valOp></h2>
</div>
```

CSS attribute selector:

```cs
[valOp] { /* ... */ }
input[type="text"] { /* ... */ }
[type] { /* ... */ }
```

## Reactivity met Observables

Zitten momenteel nog echt in de core van Angular:

- `this.form.valueChanges`
- `this.route.params`
- `this.http.get()`

Datatypen die centraal staan:

- `Observable`: readonly stream aan data
- `Subject`: writable Observable
- `BehaviorSubject`: emit altijd de laatste value bij subscriben. initiele waarde verplicht.
- `ReplaySubject`: geschiedenis instelbaar.

### Subscriptions opruimen

Kan in `ngOnDestroy()`:

```ts
ngOnDestroy() {
  this.subscription.unsubscribe();
  this.subscription2.unsubscribe();
  this.subscription3.unsubscribe();
  this.subscription4.unsubscribe();
  this.subscription5.unsubscribe();
}
```

Maar met veel subscriptions oogt dat wat rommelig en is het makkelijk om er eentje over 't hoofd te zien. Eleganter is het bij het aanmaken meteen te doen:

```ts
this.subscription = source
	.pipe(takeUntilDestroyed(this.destroyRef))
	.subscribe(value => console.log('subscribe value:', value));
```

## Folderstructuur

Over het algemeen zoiets:

```sh
|- directives
|- services
|- guards
|- extensions
|- entities
|- types
|- components
 | - loading
   |- loading.html
   |- loading.ts
   |- loading.spec.ts
   |- loading.cs
|- pipes
 | - euro
   |- euro.ts
   |- euro.spec.ts
|- app.html
|- app.ts
|- app.css
```

En vertical slice architecture is hier ook toepasbaar door voor een Admin-feature een mapje `admin/` te maken met daaronder `components/`, `directives/`, etc.

## Oldskool vs new school Angular

- oud: `*ngFor`, nieuw: `@for`
- oud: `*ngIf`, nieuw: `@if`
- oud: unittesten met Karma/Jasmine, nieuw: ... Jest? Vitest?
- oud: `@Output` en `@Input`, nieuw: `input()` en `output()`
- oud: in providers je service registreert, nieuw is `providedIn()`
- oud: DI via constructor, nieuw: `inject()`
- oud: route parameters via `ActivatedRoute` injecteren, nieuw: `withComponentInputBinding()`
- oud: met modules, nieuw: standalone (v14+)

## Overig

**How to clone an object?**

```ts
let clone = { ...this.newSnack }; // shallow copy

JSON.parse(JSON.stringify(this.newSnack)); // deep copy

structuredClone(obj); // deep clone
```

## Coole links

- [Framework benchmarks](https://github.com/krausest/js-framework-benchmark)
- [State of JS survey](https://2024.stateofjs.com/en-US/libraries/testing/)
- [ng-mocks](https://github.com/help-me-mom/ng-mocks), toffe library om te helpen met het mocken van componenten/pipes/services
- [TanStack Form](https://tanstack.com/form/latest/docs/framework/angular/examples/simple), signal-based forms. Interessante overweging gezien Angular's form support nog niet signal-based is.
- [RxMarbles](https://rxmarbles.com), geinige visualisatie van RxJS-operators