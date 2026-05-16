import { app } from "../index.js";

app.const = function(name, value) {
    if (app.const[name]) {
        throw new Error(`[const] [VDAPI] app.const returned a duplicate constant!`);
    }

    Object.defineProperty(app.const, name, {
        value: value,
        writable: false,
        configurable: false
    });
}

