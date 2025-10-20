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
  - `document.querySelector()` `document.createElement()`  `.style.display = '..'` `.setAttribute()`
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
- browserabstractie  `btn.addEventListener()` in de meeste browsers, `btn.attachEvent()` in IE 6/7/8
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

## Modern Angular development

- signals
- Zoneless
- `OnPush` change detection

## oldskool vs new school Angular

- oud: `*ngFor`, nieuw: `@for`
- oud: `*ngIf`, nieuw: `@if`


