import { fromEvent } from 'rxjs';
import { SzBaseElement } from '@sahaz/web-ui/core';
import template from './custom-element.html';
import './custom-element.scss';
export class CustomElement extends SzBaseElement {

    constructor() {
        super(template);
        // fromEvent(this, 'click').subscribe((data: Event) => console.log(data));
        // fromEvent(this.children, 'click').subscribe(() => this.elementRef.h1.innerHTML = 'Anup Kumar Saw');
    }
}