import { vector } from "../index.js"

vector.rmvClassList = function({id, classListName}) {
    const element = document.getElementById(id);

    if (!id) {
        throw new Error(`[setClassList] [VAPI] vector.setClassList returned an ID that is null!`);
    }

    element.classList.remove(classListName);

    return element;
}