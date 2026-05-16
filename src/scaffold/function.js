import { app } from "../index.js";

app.function = function(name, fn) {
    if (app.function[name]) {
        throw new Error(`[function] [Archy] app.function returned a duplicate function!`);
    }

    Object.defineProperty(app.function, name, {
        value: fn,
        writable: false,
        configurable: false
    });
}

