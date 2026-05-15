import { vector } from "../src/index.js";
import "../src/api/vector.js"

vector.getDomID("title").innerText = "Vector.JS";

vector.setClassList({
    id: "title",
    classList: "important"
})

