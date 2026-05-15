import { vector } from  "../index.js"

vector.openWindow = function({url, args}) {

    if (!args) {
        return;
    }

    return window.open(url, "_blank", args);
}


