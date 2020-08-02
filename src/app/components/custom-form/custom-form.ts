import { SzBaseElement } from '@sahaz/web-ui/core';
import { fromEvent } from 'rxjs';

import template from './custom-form.html';
import { SzPopupManger } from '../popup/service';
import './custom-form.scss';
import { SzSliderManger, SzSlider, SzSliderConfig } from '@sahaz/web-ui/components';
import { SzDemoOptions } from '../options/options';
import { SzHeader } from '../header/header';
export class SzCustomForm extends SzBaseElement {

    constructor() {
        super(template);
        this.elementRef.formPrint.addEventListener('click', (event: Event) => {
            this.querySelectorAll('input').forEach((item: any) => {
                fromEvent(item, 'keyup').subscribe((event: Event) => { console.log((event.target as any).value) })
            });
        });

        this.init();
    }

    init(): void {
        (this.elementRef.popupBtn as HTMLButtonElement).addEventListener('click', () => {
            const popupManger = new SzPopupManger();
            popupManger.open(SzCustomForm);
        });

        (this.elementRef.sliderBtn as HTMLButtonElement).addEventListener('click', () => {
            const popupManger = new SzSliderManger();
            const config = SzSliderConfig.create();
            config.maxWidth = '400px';
            const slider = popupManger.open(SzDemoOptions, config);
            slider.elementInstance.close = () => slider.close();
        });
    }
}