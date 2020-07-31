import { SzBaseElement } from '@sahaz/web-ui/core';

import template from './component.html';
import './component.scss';
export class SzListComponent extends SzBaseElement {

    constructor(value: string) {
        super(template);
        this.init(value);
    }

    public init(val: string): void {
        const span = this.querySelector('div span') as HTMLElement;
        span.innerText = val;
    }
}