export class SzBaseElement extends HTMLElement {

    public template: string;
    public elementRef: any;

    constructor(template?: string, mode?: 'open' | 'closed') {
        super();
        if (template) {
            this.loadTemplate(template, mode);
        }
    }

    private loadTemplate(temp: string, mode: 'open' | 'closed' | 'none'): void {
        if (mode) {
            const template = document.createElement('template') as HTMLTemplateElement;
            template.innerHTML = temp;
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        } else {
            this.innerHTML = temp;
        }

    }
}

export class SzBaseInputElement extends HTMLInputElement {

    public template: string;
    public elementRef: any;

    constructor(template?: string) {
        super();
        console.log(template);
        if (template) {
            this.loadTemplate(template);
        }
    }

    private loadTemplate(template: string): void {
        this.innerHTML = template;
    }
}