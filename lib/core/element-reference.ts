export default (function (constructor) {
    if (constructor &&
        constructor.prototype &&
        !(constructor.prototype as any).elementRef) {
        Object.defineProperty(constructor.prototype, 'elementRef', {
            get: function () {
                let i = 0, node, nodes = this.childNodes, elements = Object.create({});

                while (node = nodes[i++]) {
                    if (node.nodeType === 1 && node.hasAttribute('id')) {
                        elements[node.getAttribute('id')] = node;
                    }
                }
                return elements;
            }
        });
    }
})(window.Node || window.Element);


