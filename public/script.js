import { vector } from "../src/index.js";
import "../src/api/vector.js"


vector.getDomID("title").innerText = "Hello";

vector.createDom({
  id: "test",
  className: "test"
});


const el = vector.getDomID("text");

vector.getDomID("test").innerText = "Hello"


const missing = vector.getDomID("doesNotExist");
console.log(missing);