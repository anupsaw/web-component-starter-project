import { SzBaseElement } from '@sahaz/web-ui/core';
import template from './options.html';
import './options.scss';
import { SzListComponent } from '../list/component';
export class SzDemoOptions extends SzBaseElement {

    private data = ['google.com', 'facebook.com', 'twitter.com', 'yahoo.com', 'bottle.com', 'cup.com', 'pipe.com']
    private justAdded: string[] = [];
    public showPrevAdded = false;
    public showJustAdded = false;

    constructor() {
        super(template);
        console.log(this);
    }

    public showAll(): void {
        this.elementRef.prevList.innerHTML = '';
        this.data.forEach((val: string) => {
            this.elementRef.prevList.appendChild(new SzListComponent(val));
        });
        this.showPrevAdded = true;
    }

    public hideAll(): void {
        this.elementRef.prevList.innerHTML = '';
        this.showPrevAdded = false;
    }

    public addUrl(): void {
        const url = (this.querySelector('#site') as HTMLInputElement).value;
        this.data.push(url);
        this.justAdded.push(url);
        this.elementRef.justAdded.innerHTML = '';
        this.justAdded.forEach((val: string) => {
            this.elementRef.justAdded.appendChild(new SzListComponent(val));
        });

        this.showJustAdded = true;
    }

    public close(): void { }

}