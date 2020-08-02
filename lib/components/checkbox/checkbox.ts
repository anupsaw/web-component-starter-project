import { SzBaseElement } from 'lib';
import html from './checkbox.html';
import './checkbox.scss';

export class SzCheckbox extends SzBaseElement {
    constructor() {
        super(html);
    }

    public static register(): void {
        customElements.define('sz-checkbox', SzCheckbox);
    }

}

