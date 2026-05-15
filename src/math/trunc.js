import { vector } from "../index.js"

vector.decimal = function(integer) {
    return Math.trunc(integer);
}