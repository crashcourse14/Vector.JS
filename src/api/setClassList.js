import { archy } from "../index.js"

archy.setClassList = function({id, classList}) {
    const element = document.getElementById(id);

    if (!id) {
        throw new Error(`[setClassList] [VAPI] archy.setClassList returned an ID that is null!`);
    }

    element.classList.add(classList);

    return element;
}