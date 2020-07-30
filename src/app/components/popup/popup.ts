import { SzBaseElement } from '@sahaz/web-ui/core';
import template from './popup.html';
import './popup.scss';
export class SzPopup extends SzBaseElement {

    constructor() {
        super(template);
        this.init();
    }

    insert(component: any): void {
        this.querySelector('.sz-popup-main').appendChild(new component())
    }

    close(): void {
        this.remove();
    }

    init(): void {
        this.querySelector('.sz-popup-backdrop').addEventListener('click', () => this.close());
    }
}