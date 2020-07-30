import { SzBaseElement } from '../../../lib/core/base-element';
import template from './slider.html';
import './slider.scss';
import { SzSliderConfig } from './config';
import { SzElementType } from 'lib/core/custom-element-type';
export class SzSlider extends SzBaseElement {

    public elementInstance: any;
    constructor() {
        super(template);
        this.classList.add('sz-slider-container');
        this.init();
    }

    /** Adding provided component */
    insert<T>(component: any, config?: SzSliderConfig): void {
        const mainContainer = this.querySelector('.sz-slider-main') as HTMLElement;
        this.updateConfig(mainContainer, config);
        this.elementInstance = new component() as T;
        mainContainer.appendChild(this.elementInstance as HTMLElement);
        setTimeout(() => {
            mainContainer.style.transform = 'translate(0%)';
        }, 100)

    }

    close(): void {
        const mainContainer = this.querySelector('.sz-slider-main') as HTMLElement;
        mainContainer.style.transform = '';
        setTimeout(() => {
            this.remove();
        }, 500)

    }

    init(): void {
        this.querySelector('.sz-slider-backdrop').addEventListener('click', () => this.close());
    }

    private addBackdrop(popup: HTMLElement): void {
        const backdrop = document.createElement('div');
        backdrop.classList.add('sz-popup-backdrop');
        popup.appendChild(backdrop);
    }

    updateConfig(mainContainer: HTMLElement, config: SzSliderConfig = SzSliderConfig.create()): void {
        mainContainer.style.maxWidth = config.maxWidth || '600px';
    }

    private scrollStrategy(): void {

    }
}

customElements.define('sz-slider', SzSlider);