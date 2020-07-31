import { SzBaseElement } from 'lib';

import template from './component.html';
import './component.scss';
export class SzComponent extends SzBaseElement {

    constructor() {
        super(template);
    }
}