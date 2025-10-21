import { JsonPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Autocompleter } from './autocompleter';

@NgModule({
	declarations: [Autocompleter],
    exports: [Autocompleter],
	imports: [FormsModule, JsonPipe],
	providers: [],
})
export class ComponentsModule {}
