import { SzBaseElement } from '@sahaz/web-ui/core';
import template from './options.html';
import './options.scss';
import { SzListComponent } from '../list/component';
export class SzDemoOptions extends SzBaseElement {

    private data = ['google.com', 'facebook.com', 'twitter.com', 'yahoo.com', 'bottle.com', 'cup.com', 'pipe.com']
    private justAdded: string[] = [];
    constructor() {
        super(template);
        this.hide('.sz-hide-all');
        this.hide('#justAdd');
        this.hide('#prevAdd');
        this.addListener('#close', 'click', () => this.close());
        this.addListener('#optionsAdd', 'click', () => this.addUrl());
        this.addListener('.sz-show-all', 'click', () => this.showAll());
        this.addListener('.sz-hide-all', 'click', () => this.hideAll());
    }

    public showAll(): void {
        this.querySelector('.sz-options-url-list').innerHTML = '';
        (this.querySelector('.sz-show-all') as HTMLElement).style.display = 'none';
        (this.querySelector('.sz-hide-all') as HTMLElement).style.display = 'flex';
        this.hide('#prevAdd', false);
        this.data.forEach((val: string) => {
            this.querySelector('.sz-options-url-list').appendChild(new SzListComponent(val));
        });
    }

    public hideAll(): void {
        this.querySelector('.sz-options-url-list').innerHTML = '';
        this.hide('#prevAdd');
        (this.querySelector('.sz-hide-all') as HTMLElement).style.display = 'none';
        (this.querySelector('.sz-show-all') as HTMLElement).style.display = 'flex';
    }

    public addUrl(): void {
        const url = (this.querySelector('#site') as HTMLInputElement).value;
        this.data.push(url);
        this.justAdded.push(url);
        this.hide('#justAdd', false);
        this.querySelector('.sz-options-just-added-list').innerHTML = '';
        this.justAdded.forEach((val: string) => {
            this.querySelector('.sz-options-just-added-list').appendChild(new SzListComponent(val));
        });
        //this.init();
    }

    public close(): void { }

    private addListener(selector: string, event: string, listener: () => void): void {
        this.querySelector(selector).addEventListener(event, listener);
    }

    private hide(selector: string, isHide: boolean = true): void {
        (this.querySelector(selector) as HTMLElement).style.display = isHide ? 'none' : 'flex';
    }

}