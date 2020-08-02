const inlineEvents = ['click', 'change', 'focusout', 'focusin'];

export class SzBaseElement extends HTMLElement {

    public template: string;
    public elementRef: { [key: string]: HTMLElement };
    private commentMap = new Map<string, SzComment[]>();

    constructor(template?: string, mode?: 'open' | 'closed') {
        super();
        if (template) {
            this.loadTemplate(template, mode);
            this.initInlineEventBinding();
            this.initNodeIfStatus();
            this.setRefElements();
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

    /** this method include all the inline action added in the template */
    private initInlineEventBinding(): void {
        const self = this as any;
        inlineEvents.forEach((eventName: string) => {
            this.querySelectorAll(`[${eventName}]`).forEach((item: HTMLElement) => {
                const key = item.getAttribute(eventName);
                item.addEventListener(eventName, () => {
                    self[key]();
                });
            });
        });

    }

    private initNodeIfStatus(): void {
        this.querySelectorAll(`[if]`).forEach((item: HTMLElement) => {
            const name = item.getAttribute('if');
            !Object.hasOwnProperty.call(this, name) && Object.defineProperty(this, name, {
                get: () => { return (this as any)[`_${name}`]; },
                set: (value: any) => {
                    (this as any)[`_${name}`] = value;
                    this.updateDom();
                },
            })
            this.seCommentElement(name, item);
        });
    }

    protected updateDom(): void {
        this.commentMap.forEach((val: SzComment[], key: string) => {
            key = key.replace(/([A-Za-z0-9]+)/g, 'this.$1');
            console.log(key);
            const value = eval(key);
            if (value) {
                val.forEach((item) => item.comment.replaceWith(item.dom))
            } else {
                val.forEach((item) => item.dom.replaceWith(item.comment))
            }
        });
    }

    /** This method set the element to the value assigned to the ref attribute  */
    protected setRefElements(...refs: string[]): void {
        var obj: { [key: string]: HTMLElement } = {};
        this.querySelectorAll(`[ref]`).forEach((item: HTMLElement) => {
            const name = item.getAttribute('ref');
            obj[name] = item;

        });

        this.elementRef = obj;
    }

    private seCommentElement(key: string, ele: HTMLElement): void {
        let comment = this.commentMap.get(key);
        comment = comment || [];
        comment.push()

        if (this.commentMap.has(key)) {
            comment = this.commentMap.get(key);
            comment.push(SzComment.create(ele));
        } else {
            this.commentMap.set(key, [SzComment.create(ele)]);
        }
    }
}

export class SzComment {
    private static counter = 0;
    comment: Comment;
    dom: HTMLElement;
    private constructor() { }
    public static create(ele: HTMLElement): SzComment {
        const comment = document.createComment(`${SzComment.counter++}`);
        const self = new SzComment();
        self.comment = comment;
        self.dom = ele;
        console.log(self);
        return self;

    }
}