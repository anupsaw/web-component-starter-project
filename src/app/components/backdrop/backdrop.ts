import { SzBaseElement } from '@sahaz/web-ui/core';
import './backdrop.scss';
export class SzHeaderBackdrop extends SzBaseElement {

    constructor() {
        super();
        console.log('Backdrop', this.elementRef);
    }
}