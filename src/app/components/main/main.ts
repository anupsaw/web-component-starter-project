import { SzBaseElement } from '@sahaz/web-ui/core';
import './main.scss';
export class SzMain extends SzBaseElement {

    constructor() {
        super();
        console.log(this.children);
    }
}