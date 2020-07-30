import { SzBaseElement } from '@sahaz/web-ui/core';
import template from './header.html';
import './header.scss';
export class SzHeader extends SzBaseElement {

    constructor() {
        super(template);
    }
}