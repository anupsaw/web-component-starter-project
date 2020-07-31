import { SzBaseElement } from '@sahaz/web-ui/core';
import template from './options.html';
import './options.scss';
import { SzListComponent } from '../list/component';
export class SzDemoOptions extends SzBaseElement {

    private data = ['google.com', 'facebook.com', 'twitter.com', 'yahoo.com', 'bottle.com', 'cup.com', 'pipe.com']
    constructor() {
        super(template);
        (this.querySelector('#close') as HTMLButtonElement).addEventListener('click', () => {
            console.log('clicked');
            this.close();
        });
        this.init();
    }

    public init(): void {
        this.data.forEach((val: string) => {
            this.querySelector('.sz-main-container').appendChild(new SzListComponent(val));

        })
    }

    public close(): void { }

}