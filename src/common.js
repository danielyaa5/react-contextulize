const common = {
    isWindow(obj) {
        return obj != null && obj === obj.window;
    },

    getWindow(elem) {
        return this.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    },

    numToPx(num) {
        return `${num}px`;
    },

    getBounds(elem) {
        const offset = this.offset(elem);

        return {
            tl: {
                x: offset.left,
                y: offset.top
            },
            br: {
                x: offset.left + elem.clientWidth,
                y: offset.top + elem.clientHeight
            }
        };
    },

    isInBounds(bounds, x, y) {
        return x >= bounds.tl.x && x <= bounds.br.x && y >= bounds.tl.y && y <= bounds.br.y;
    },

    hasClass(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    },

    noop() {
        return () => {};
    },

    bindWithoutThis(cb, options) {
        const bindArgs = Array.prototype.slice.call(arguments, 1);

        return function () {
            let args;
            const internalArgs = Array.prototype.slice.call(arguments, 0);
            if (options && options.bindBefore) {
                args = Array.prototype.concat(internalArgs, bindArgs);
            } else {
                args = Array.prototype.concat(internalArgs, bindArgs);
            }

            return cb.apply(this, args);
        };
    },

    throttle(type, name, obj) {
        obj = obj || window;
        let running = false;
        let func = () => {
            if (running) { return; }

            running = true;
            requestAnimationFrame(() => {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };

        obj.addEventListener(type, func);
    },

    offset(elem) {
        let docElem;
        let win;
        let box = { top: 0, left: 0 };
        let doc = elem && elem.ownerDocument;

        docElem = doc.documentElement;

        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }

        win = this.getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }
};

export default common;
