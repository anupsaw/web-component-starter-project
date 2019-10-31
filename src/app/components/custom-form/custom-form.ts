import { SzBaseElement } from '../../../lib/base-element';
import { fromEvent } from 'rxjs';

import template from './custom-form.html';
export class SzCustomForm extends SzBaseElement {


    constructor() {
        super(template);
        ((this.children as any).formPrint as HTMLElement).addEventListener('click', (event: Event) => {
            this.querySelectorAll('input').forEach((item: any) => {
                fromEvent(item, 'keyup').subscribe((event: Event) => { console.log((event.target as any).value) })
            });
        })
    }
}