import { SzBaseElement } from '../../../lib/base-element';
import template from './header.html';
import './header.scss';
export class SzHeader extends SzBaseElement {

    constructor() {
        super(template);
    }
}