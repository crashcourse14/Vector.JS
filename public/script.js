import { vector } from "../src/index.js";
import "../src/api/vector.js"

const I = vector.round(10.584773);
const J = vector.floor(10.584773);
const H = vector.floor(34.584773);

vector.getDomID("title").innerText = I;
vector.getDomID("title2").innerText = J;
vector.getDomID("title3").innerText = H;

vector.setClassList({
    id: "title",
    classList: "test"
})

vector.openWindow({
    url: "https://github.com",
})

