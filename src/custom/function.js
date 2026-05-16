import { app } from "../index.js";

app.function = function(name, fn) {
    if (app.function[name]) {
        throw new Error(`[function] [VDAPI] app.function returned a duplicate function!`);
    }

    Object.defineProperty(app.function, name, {
        value: fn,
        writable: false,
        configurable: false
    });
}

//Example:

/**********
app.function("greet", (name) => {
    return `Hello, ${name}!`;
});

app.function.greet("John"); //"Hello, John!"

app.function.greet = () => {}; //Error: Cannot assign to read only property 'greet' of object '[object Object]'

**********/
