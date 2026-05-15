import { archy } from "../index.js"

archy.getDomTags = function(tagNames) {
    const element = document.getElementsByTagName(tagNames);

    if (!element) {
        throw new Error(`[getDomsTag] [VDAPI] archy.getDomsTag returned (a) null tag(s)!`)
    }

    return element;
}