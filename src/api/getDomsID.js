import { vector } from "../index.js"

vector.getDomID = function(id) {
    const element = document.getElementById(id);

    if (!element) {
        throw new Error(`[getDomsID] [VDAPI] vector.getDomsID returned (a) null id(s)`);   
    }

    return element;
}