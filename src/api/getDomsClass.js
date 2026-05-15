import { app } from "../index.js"

app.getDomClass = function(className) {
    const element = document.getElementsByClassName(className);

    if (!element) {
        throw new Error(`[getDomClass] [VDAPI] archy.getDomsClass returned (a) null class(es)!`);
    }
    
    return element;
}