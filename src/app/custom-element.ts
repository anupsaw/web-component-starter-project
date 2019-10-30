import { fromEvent } from 'rxjs';
import { SzBaseElement } from '../lib/SzBaseElement';
export class CustomElement extends SzBaseElement {

    template = `${require('./custom-element.html')}`;
    elements: any = {};
    constructor() {
        super();
        console.log(this.template);
        // this.innerHTML = `<h1 id="test">My First Custom Element.</h1>`
        this.innerHTML = this.template;
        console.log(this.children);
        for (let index = 0; index < this.children.length; index++) {
            const element = this.children[index].getAttribute('id');
            if (element) {
                this.elements[element] = this.children[index];
            }


        }
        // (this.children as any).forEach((element: any) => {
        //     console.log(element.getAttribute('id'));
        // });
        // this.elements = { ...this.children };
        console.log(this.elements);

        fromEvent(this, 'click').subscribe((data: Event) => console.log(data));
        fromEvent(this.children, 'click').subscribe(() => this.elements.h1.innerHTML = 'Anup Kumar Saw');
    }
}