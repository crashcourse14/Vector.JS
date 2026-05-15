import { archy } from  "../index.js"

archy.openWindow = function({url, args}) {

    if (!args) {
        return;
    }

    return window.open(url, "_blank", args);
}


