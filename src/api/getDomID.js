import { archy } from "../index.js"

archy.getDomID = function(id) {
    const element = document.getElementById(id);

    if (!element) {
        throw new Error(`[getDomID] [VDAPI] archy.getDomID returned null`);   
    }

    return element;
}