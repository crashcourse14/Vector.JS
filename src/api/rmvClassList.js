import { archy } from "../index.js"

archy.rmvClassList = function({id, classListName}) {
    const element = document.getElementById(id);

    if (!id) {
        throw new Error(`[setClassList] [VAPI] archy.setClassList returned an ID that is null!`);
    }

    element.classList.remove(classListName);

    return element;
}