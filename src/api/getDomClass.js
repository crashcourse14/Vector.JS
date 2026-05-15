import { vector } from "../index.js"

vector.getDomClass = function(className) {
    const element = document.getElementByClassName(className);

    if (!element) {
        throw new Error(`[getDomClass] [VDAPI] vector.getDomClass returned a null class!`);
    }
    
    return element;
}