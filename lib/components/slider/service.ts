import { SzSlider } from './slider';
import { SzSliderConfig } from './config';

export class SzSliderManger {

    public open<T extends any>(component?: T, config?: SzSliderConfig): SzSlider {
        let container: HTMLElement = document.querySelector('.sz-dialog-container');

        if (!container) {
            container = document.createElement('div');
            container.classList.add('sz-dialog-container');
            document.body.appendChild(container);
        }
        const slider = new SzSlider();
        container.appendChild(slider);
        component && slider.insert(component, config);
        return slider;

    }

    // addSliderContainer<K>(parent: HTMLElement): SzSlider<K> {
    //     const sliderContainer = new SzSlider<K>();
    //     parent.appendChild(sliderContainer);
    //     return sliderContainer
    // }

    addBackdrop(popup: HTMLElement): void {
        const backdrop = document.createElement('div');
        backdrop.classList.add('sz-popup-backdrop');
        popup.appendChild(backdrop);
    }


}