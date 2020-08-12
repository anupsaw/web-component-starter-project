import { SzBaseElement } from 'lib';

import template from './component.html';
import './component.scss';
import { SzDomObserver } from 'lib/core/dom-observer';

export enum SzPositions {
    left = 'left',
    right = 'right',
    top = 'top',
    bottom = 'bottom'
}
export class SzPopover extends SzBaseElement {

    constructor() {
        super(template);
        this.initAll();
        //  SzDomObserver.test(document.getElementsByTagName('custom-form')[0] as HTMLElement);
    }

    initAll(): void {
        console.log('init called');
        document.addEventListener('readystatechange', event => {
            const status = (event.target as any).readyState
            console.log(status);
            if (status === 'complete') {
                this.addEventListener('click', () => {
                    document.body.removeChild(this);
                });
                const popover = document.querySelectorAll('[szPopover]');
                console.log(this.offsetWidth, 'popover')
                popover.forEach((item: HTMLElement) => {


                    // SzDomObserver.test(item);
                    item.setAttribute('popover-active', 'true');
                    (item as any).onDisconnect = () => {
                        console.log('diconnected');
                    }
                    item.addEventListener('mouseenter', (e) => {
                        const bound = item.getBoundingClientRect();
                        console.log(item, e);
                        console.log(this.offsetWidth, 'popover 1');
                        // this.style.top = `${e.y}px`;
                        // this.style.left = `${e.x}px`;
                        this.elementRef.popoverContent.innerHTML = item.getAttribute('szPopover');
                        document.body.appendChild(this);
                        this.setPosition(item);
                        console.log(this.offsetWidth, 'popover 1');
                    });

                    item.addEventListener('mouseleave', () => {
                        console.log(item);
                        document.body.removeChild(this);
                    });

                });
            }
        });


    }

    public setPosition(targetElement: HTMLElement, position: SzPositions = SzPositions.left): void {

        const safeSpacing = 15;
        const selfWidth = this.offsetWidth;
        const selfHeight = this.offsetHeight;
        const docWidth = document.body.offsetWidth;
        const docHeight = document.body.offsetHeight;

        let right;
        let top;

        if (position === SzPositions.left) {

            right = document.body.offsetWidth - targetElement.offsetLeft + safeSpacing;
            top = targetElement.offsetTop + (targetElement.offsetHeight / 2) - (this.offsetHeight / 2);
        }

        if (position === SzPositions.bottom) {

            right = document.body.offsetWidth - targetElement.offsetLeft - (targetElement.offsetWidth / 2) - (selfWidth / 2);
            top = targetElement.offsetTop + targetElement.offsetHeight + safeSpacing;
            right = right < 10 ? 10 : right;
            top = top < 10 ? 10 : top;

            // if (right === 10) {
            //     this.elementRef.szArrow.style.right = '7.5px';
            // } else {
            //     this.elementRef.szArrow.style.right = '';
            // }
        }



        this.style.top = `${top}px`;
        this.style.right = `${right}px`;
        this.style.position = getComputedStyle(targetElement).position === 'fixed' ? 'fixed' : 'absolute';
    }
}

customElements.define('sz-popover', SzPopover);

new SzPopover();