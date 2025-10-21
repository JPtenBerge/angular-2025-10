import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class NavigateService {
    next<T>(data: T[], currentIndex: number | null) {
        console.log('nexting from service!');
        currentIndex ??= -1;
		return (currentIndex + 1) % data.length;
    }
}