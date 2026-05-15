import { vector } from "../src/index.js";
import "../src/api/vector.js"


vector.getDomID("title").innerText = "Hello";

vector.setClassList({
    id: "title",
    classList: "test"
})

vector.openWindow({
    url: "https://github.com",
})

