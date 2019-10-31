export class SzBaseElement extends HTMLElement {

    public template: string;
    public elementRef: any;

    constructor(template?: string) {
        super();
        if (template) {
            this.loadTemplate(template);
        }
    }

    private loadTemplate(template: string): void {
        this.innerHTML = template;
    }
}