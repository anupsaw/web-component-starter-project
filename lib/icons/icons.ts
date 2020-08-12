export class SzIconsRegistry {

    private static iconRegistry: Map<string, string> = new Map()

    public static register(name: string, svg?: string): void {
        this.iconRegistry.set(name, svg);

        customElements.define(`sz-icon-${name}`, class extends SzIconBaseElement {
            constructor() {
                super(svg);
            };
        });
    }
}

import play from './svg/play_arrow-black-48dp.svg'
import pause from './svg/pause-black-48dp.svg'
import camera from './svg/local_see-black-48dp.svg';
import cameraOutlined from './svg/local_see-black-48dp-outlined.svg';
import close from './svg/close-black-48dp.svg';
import { SzIconBaseElement } from '../core';

SzIconsRegistry.register('play', play);
SzIconsRegistry.register('pause', pause);
SzIconsRegistry.register('camera', camera);
SzIconsRegistry.register('camera-outlined', cameraOutlined);
SzIconsRegistry.register('close', close);
