export class SzIconBaseElement extends HTMLElement {

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
        const svg = this.querySelector('svg').style;
        svg.height = svg.width = 'inherit';
        this.classList.add('sz-base-icon');
    }
}