import { vector } from "../index.js"

vector.createDom = function({id, className }) {

    const element = document.createElement("div");

    if (id) {
        element.id = id;
    } else {
        throw new Error("[createDom] [VDAPI] createDom return an ID that is null!");
    }

    if (className) {
        element.className = className;
    } else {
        throw new Error("[createDom] [VDAPI] createDom return a class name that is null!");
    }

    document.body.appendChild(element);

    return element;
};