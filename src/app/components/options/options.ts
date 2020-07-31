import { SzBaseElement } from '@sahaz/web-ui/core';
import template from './options.html';
import './options.scss';
import { SzListComponent } from '../list/component';
export class SzDemoOptions extends SzBaseElement {

    private data = ['google.com', 'facebook.com', 'twitter.com', 'yahoo.com', 'bottle.com', 'cup.com', 'pipe.com']
    constructor() {
        super(template);
        this.addListener('#close', 'click', () => this.close());
        this.addListener('#optionsAdd', 'click', () => this.addUrl());
        // (this.querySelector('#close') as HTMLButtonElement).addEventListener('click', () => {
        //     console.log('clicked');
        //     this.close();
        // });
        this.init();
    }

    public init(): void {
        this.querySelector('.sz-options-url-list').innerHTML = '';
        this.data.forEach((val: string) => {
            this.querySelector('.sz-options-url-list').appendChild(new SzListComponent(val));

        })
    }

    public addUrl(): void {
        const url = (this.querySelector('#site') as HTMLInputElement).value;
        this.data.push(url);
        this.init();
    }

    public close(): void { }

    private addListener(selector: string, event: string, listener: () => void): void {
        this.querySelector(selector).addEventListener(event, listener);
    }

}