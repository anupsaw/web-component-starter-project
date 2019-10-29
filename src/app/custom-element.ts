import { fromEvent } from 'rxjs';
export class CustomElement extends HTMLElement {

    constructor() {
        super();
        this.innerHTML = `<h1>My First Custom Element.</h1>`
        fromEvent(this, 'click').subscribe((data: Event) => console.log(data));
    }
}