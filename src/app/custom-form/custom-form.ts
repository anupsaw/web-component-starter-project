import { SzBaseElement } from '../../lib/SzBaseElement';
import { fromEvent } from 'rxjs';

export class SzCustomForm extends SzBaseElement {


    constructor() {
        super();
        console.log(this.firstElementChild);
        this.template = `${require('./custom-form.html')}`;
        this.innerHTML = this.template;
        ((this.children as any).formPrint as HTMLElement).addEventListener('click', (event: Event) => {
            this.querySelectorAll('input').forEach((item: any) => {
                fromEvent(item, 'keyup').subscribe((event:Event) => {console.log((event.target as any).value) })
            });
            console.log()
        })
    }
}