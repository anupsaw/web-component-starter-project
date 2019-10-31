import { fromEvent } from 'rxjs';
import { SzBaseElement } from '../../../lib/base-element';
import template from './custom-element.html';
export class CustomElement extends SzBaseElement {

    constructor() {
        super(template);
        console.log(this.elementRef);
        fromEvent(this, 'click').subscribe((data: Event) => console.log(data));
        fromEvent(this.children, 'click').subscribe(() => this.elementRef.h1.innerHTML = 'Anup Kumar Saw');
    }
}