import { vector } from "../index.js"

vector.getDomTags = function(tagNames) {
    const element = document.getElementsByTagName(tagNames);

    if (!element) {
        throw new Error(`[getDomsTag] [VDAPI] vector.getDomsTag returned (a) null tag(s)!`)
    }

    return element;
}