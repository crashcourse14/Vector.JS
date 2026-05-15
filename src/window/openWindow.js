import { app } from  "../index.js"

app.openWindow = function({url, args}) {

    if (!args) {
        return;
    }

    return window.open(url, "_blank", args);
}


