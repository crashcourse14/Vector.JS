import { archy } from "../index.js"

archy.getDomClass = function(className) {
    const element = document.getElementByClassName(className);

    if (!element) {
        throw new Error(`[getDomClass] [VDAPI] archy.getDomClass returned a null class!`);
    }
    
    return element;
}