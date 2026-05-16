import { app } from "../src/index.js";
import "../lib/lib.js"

app.getDomID("title").innerText = "Vector.JS";

app.setClassList({
    id: "title",
    classList: "important"
})

app.const("Human", {
    name: "John",
    age: "30"
    //more things about human
});

app.function("greet", (name) => {
    alert(`Hello, ${name}!`);
});

app.function.greet(app.const.Human.name); 








