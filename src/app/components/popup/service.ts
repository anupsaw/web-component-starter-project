import { SzPopup } from './popup';

export class SzPopupManger {

    public open(component?: any): SzPopup {
        let container: HTMLElement = document.querySelector('.sz-dialog-container');

        if (!container) {
            container = document.createElement('div');
            container.classList.add('sz-dialog-container');
            document.body.appendChild(container);
        }
        const popup = this.addPopup(container);
        component && popup.insert(component);
        return popup;
        // this.appComponent()
        // const popup = this.initPopup(container);
        // this.addBackdrop(popup);

    }

    addPopup(parent: HTMLElement): SzPopup {
        const popupContainer = new SzPopup();
        parent.appendChild(popupContainer);
        return popupContainer
    }

    initPopup(parent: HTMLElement): HTMLElement {
        const popupContainer = document.createElement('div');
        popupContainer.classList.add('sz-popup-container');
        parent.appendChild(popupContainer);
        return popupContainer;
    }

    addBackdrop(popup: HTMLElement): void {
        const backdrop = document.createElement('div');
        backdrop.classList.add('sz-popup-backdrop');
        popup.appendChild(backdrop);
    }

}