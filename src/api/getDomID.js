import { vector } from "../index.js"

vector.getDomID = function(id) {
    const element = document.getElementById(id);

    if (!element) {
        throw new Error(`[getDomID] [VDAPI] vector.getDomID returned null`);   
    }

    return element;
}