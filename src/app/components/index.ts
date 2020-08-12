import '@sahaz/web-ui/icons';
import '../button-group/button-group';
import { SzCheckbox } from '@sahaz/web-ui/components';
import { CustomElement } from './custom-element/custom-element';
import { SzCustomForm } from './custom-form/custom-form';
import { SzHeader } from './header/header';
import { SzFooter } from './footer/footer';
import { SzHeaderBackdrop } from './backdrop/backdrop';
import { SzMain } from './main/main';
import { SzLogo } from './logo/logo';
import { SzPopup } from './popup/popup';
import { SzDemoOptions } from './options/options';
import { SzListComponent } from './list/component';
import { SzCustomElement } from '@sahaz/web-ui/core';
SzCheckbox.register();

customElements.define('custom-element', CustomElement);
customElements.define('custom-form', SzCustomForm);
customElements.define('sz-header', SzHeader);
customElements.define('sz-footer', SzFooter);
customElements.define('sz-header-backdrop', SzHeaderBackdrop);

customElements.define('sz-main', SzMain);
customElements.define('sz-logo', SzLogo);
customElements.define('sz-popup', SzPopup);
SzCustomElement.register('sz-options', SzDemoOptions);
customElements.define('sz-list', SzListComponent);

