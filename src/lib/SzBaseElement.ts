export class SzBaseElement extends HTMLElement {

    template: string;
    elements: any = {};
    loadTemplate(url: string): string {
        return '';
        //  return `${require(url)}`
    }
}