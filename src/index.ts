import { CustomElement } from './app/custom-element';
import { SzCustomForm } from './app/custom-form/custom-form';
customElements.define('custom-element', CustomElement);
customElements.define('custom-form', SzCustomForm);
console.log('Webpack 123');