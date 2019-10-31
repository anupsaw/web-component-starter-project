
import './lib/element-reference';
import { CustomElement } from './app/components/custom-element/custom-element';
import { SzCustomForm } from './app/components/custom-form/custom-form';
import { SzHeader } from './app/components/header/header';
import { SzFooter } from './app/components/footer/footer';


customElements.define('custom-element', CustomElement);
customElements.define('custom-form', SzCustomForm);
customElements.define('sz-header', SzHeader);
customElements.define('sz-footer', SzFooter);
console.log('Webpack 123');

