import { app } from "../index.js"

app.getDomClass = function(className) {
    const element = document.getElementByClassName(className);

    if (!element) {
        throw new Error(`[getDomClass] [VDAPI] archy.getDomClass returned a null class!`);
    }
    
    return element;
}