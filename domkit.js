(function(global) {
    const $id = (id) => document.getElementById(id);
    const $cls = (cls) => document.getElementsByClassName(cls);
    const $tag = (tagname) => document.getElementsByTagName(tagname);
    const $q = (query) => document.querySelector(query);
    const $qAll = (queryAll) => document.querySelectorAll(queryAll);

    if (!Element.prototype.on) {
        Element.prototype.on = function(event, callback) {
            this.addEventListener(event, callback);
            return this;
        }
    }

    if (!Element.prototype.addClass) {
        Element.prototype.addClass = function(classString) {
            this.classList.add(classString);
            return this;
        }
    }

    if (!Element.prototype.removeClass) {
        Element.prototype.removeClass = function(classString) {
            this.classList.remove(classString);
            return this;
        }
    }

    if (!Element.prototype.getStyle) {
        Element.prototype.getStyle = function (styleProps) {
            if (typeof styleProps !== "string") {
                throw new TypeError("Invalid Value", {
                    cause: "getStyle Only Accepts String"
                });
            }
            return window.getComputedStyle(this).getPropertyValue(`${styleProps}`);
        }
    }

    if (!Element.prototype.moveTo) {
        Element.prototype.moveTo = function (opts) {
            if (typeof opts !== "object") opts = {};
            if (opts.behavior && typeof opts.behavior !== "string") {
                throw new TypeError("behavior must be a string");
            }
            this.scrollIntoView({behavior: "smooth", ...opts});
            return this;
        }
    }

    global.DOMKit = {
        $id,
        $cls,
        $tag,
        $qAll,
        $q
    }

})(typeof window !== "undefined" ? window : this);