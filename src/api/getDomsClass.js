import { vector } from "../index.js"

vector.getDomClass = function(className) {
    const element = document.getElementsByClassName(className);

    if (!element) {
        throw new Error(`[getDomClass] [VDAPI] vector.getDomsClass returned (a) null class(es)!`);
    }
    
    return element;
}