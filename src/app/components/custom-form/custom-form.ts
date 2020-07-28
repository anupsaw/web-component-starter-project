import { SzBaseElement } from '../../../lib/base-element';
import { fromEvent } from 'rxjs';

import template from './custom-form.html';
import { SzPopupManger } from '../popup/service';
export class SzCustomForm extends SzBaseElement {


    constructor() {
        super(template);
        ((this.children as any).formPrint as HTMLElement).addEventListener('click', (event: Event) => {
            this.querySelectorAll('input').forEach((item: any) => {
                fromEvent(item, 'keyup').subscribe((event: Event) => { console.log((event.target as any).value) })
            });
        });

        this.init();
    }

    init(): void {
        console.log(this.elementRef.popupBtn);
        (this.elementRef.popupBtn as HTMLButtonElement).addEventListener('click', () => {
            console.log('clicked');
            const popupManger = new SzPopupManger();
            popupManger.open(SzCustomForm);
        })
    }
}