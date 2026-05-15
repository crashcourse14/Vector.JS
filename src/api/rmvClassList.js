import { app } from "../index.js"

app.rmvClassList = function({id, classListName}) {
    const element = document.getElementById(id);

    if (!id) {
        throw new Error(`[setClassList] [VAPI] archy.setClassList returned an ID that is null!`);
    }

    element.classList.remove(classListName);

    return element;
}