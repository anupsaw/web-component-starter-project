export class SzCustomElement {
    private static registry: Map<string, { new(...args: any[]): {} }> = new Map();
    public static register<T extends { new(...args: any[]): {} }>(name: string, construct: T): void {
        const WebElement = class extends construct {
            constructor(...arg: any[]) {
                super(arg);
                console.dir(this);

                console.log(typeof construct)
            }
        }

        customElements.define(name, WebElement as any);
        this.registry.set(name, WebElement as T);
    }

    public static get<T extends { new(...args: any[]): {} }>(name: string): T {
        const cls = this.registry.get(name);
        return cls as T;
    }
}