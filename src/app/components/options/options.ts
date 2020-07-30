import { SzBaseElement } from '@sahaz/web-ui/core';
import template from './options.html';
import './options.scss';
export class SzDemoOptions extends SzBaseElement {
    constructor() {
        super(template);
        (this.querySelector('#close') as HTMLButtonElement).addEventListener('click', () => {
            console.log('clicked');
            this.close();
        });
    }

    public close(): void { }

}