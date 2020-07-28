
import './lib/element-reference';
import { CustomElement } from './app/components/custom-element/custom-element';
import { SzCustomForm } from './app/components/custom-form/custom-form';
import { SzHeader } from './app/components/header/header';
import { SzFooter } from './app/components/footer/footer';
import { SzHeaderBackdrop } from './app/components/backdrop/backdrop';
import { SzMain } from './app/components/main/main';
import { SzLogo } from './app/components/logo/logo';
import { SzPopup } from './app/components/popup/popup';


customElements.define('custom-element', CustomElement);
customElements.define('custom-form', SzCustomForm);
customElements.define('sz-header', SzHeader);
customElements.define('sz-footer', SzFooter);
customElements.define('sz-header-backdrop', SzHeaderBackdrop);

customElements.define('sz-main', SzMain);
customElements.define('sz-logo', SzLogo);
customElements.define('sz-popup', SzPopup);
console.log('Webpack 123');

