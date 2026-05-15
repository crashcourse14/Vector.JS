import { vector } from "../index.js"

vector.setClassList = function({id, classList}) {
    const element = document.getElementById(id);

    if (!id) {
        throw new Error(`[setClassList] [VAPI] vector.setClassList returned an ID that is null!`);
    }

    element.classList.add(classList);

    return element;
}