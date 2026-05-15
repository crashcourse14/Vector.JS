import { archy } from "../index.js"

archy.getDomID = function(id) {
    const element = document.getElementById(id);

    if (!element) {
        throw new Error(`[getDomsID] [VDAPI] archy.getDomsID returned (a) null id(s)`);   
    }

    return element;
}