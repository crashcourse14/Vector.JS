import { app } from "../src/index.js";
import "../lib/lib.js"

// This is from the plugin
import "../plugins/example.js"
app.alert("hello") //Should probably make this native to the app, but for now it's just an example of how to use plugins.

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

//app.function.greet(app.const.Human.name); 








