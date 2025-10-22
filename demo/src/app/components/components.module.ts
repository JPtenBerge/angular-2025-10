import { JsonPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Autocompleter } from './autocompleter';

@NgModule({
	declarations: [Autocompleter],
    exports: [Autocompleter],
	imports: [FormsModule, ReactiveFormsModule, JsonPipe],
	providers: [],
})
export class ComponentsModule {}
