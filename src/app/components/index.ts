import '@sahaz/web-ui/icons';
import { CustomElement } from './custom-element/custom-element';
import { SzCustomForm } from './custom-form/custom-form';
import { SzHeader } from './header/header';
import { SzFooter } from './footer/footer';
import { SzHeaderBackdrop } from './backdrop/backdrop';
import { SzMain } from './main/main';
import { SzLogo } from './logo/logo';
import { SzPopup } from './popup/popup';
import { SzDemoOptions } from './options/options';

customElements.define('custom-element', CustomElement);
customElements.define('custom-form', SzCustomForm);
customElements.define('sz-header', SzHeader);
customElements.define('sz-footer', SzFooter);
customElements.define('sz-header-backdrop', SzHeaderBackdrop);

customElements.define('sz-main', SzMain);
customElements.define('sz-logo', SzLogo);
customElements.define('sz-popup', SzPopup);
customElements.define('sz-options', SzDemoOptions);