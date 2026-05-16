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

//Example:

/**********
app.const("Human", {
    name: "John",
    age: "30"
    //more things about human
});

app.const.Human; //{name: "John", age: "30"}

app.const.Human = {}; //Error: Cannot assign to read only property 'Human' of object '[object Object]'

**********/